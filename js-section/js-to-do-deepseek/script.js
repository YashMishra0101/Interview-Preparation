document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI
    UI.displayTasks();
    UI.displayQuote();
    UI.loadTheme();
    UI.initNavbar();

    // Event: Add a task
    document.getElementById('task-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('task-input').value;
        const imageInput = document.getElementById('task-image');
        
        if (title.trim() === '') {
            UI.showAlert('Please enter a task title', 'danger');
            return;
        }

        const task = {
            id: Date.now().toString(),
            title,
            date: new Date().toISOString(),
            completed: false
        };

        // Save task
        Storage.addTask(task);

        // Save image if exists
        if (imageInput.files.length > 0) {
            const reader = new FileReader();
            reader.onload = (e) => {
                Storage.saveTaskImage(task.id, e.target.result);
                UI.displayTasks();
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            UI.displayTasks();
        }

        UI.clearFields();
        UI.showAlert('Task added successfully', 'success');
    });

    // Event: Complete/Undo task
    document.getElementById('task-list').addEventListener('click', (e) => {
        if (e.target.closest('.complete-btn')) {
            const id = e.target.closest('.complete-btn').dataset.id;
            const tasks = Storage.getTasks();
            const task = tasks.find(task => task.id === id);
            
            if (task) {
                const updatedTask = { ...task, completed: !task.completed };
                Storage.updateTask(id, updatedTask);
                UI.displayTasks();
                UI.showAlert(`Task marked as ${updatedTask.completed ? 'completed' : 'pending'}`, 'success');
            }
        }
    });

    // Event: Delete task
    document.getElementById('task-list').addEventListener('click', (e) => {
        if (e.target.closest('.delete-btn')) {
            const id = e.target.closest('.delete-btn').dataset.id;
            if (confirm('Are you sure you want to delete this task?')) {
                Storage.deleteTask(id);
                Storage.deleteTaskImage(id);
                UI.displayTasks();
                UI.showAlert('Task deleted successfully', 'success');
            }
        }
    });

    // Event: Edit task
    document.getElementById('task-list').addEventListener('click', (e) => {
        if (e.target.closest('.edit-btn')) {
            const id = e.target.closest('.edit-btn').dataset.id;
            const tasks = Storage.getTasks();
            const task = tasks.find(task => task.id === id);
            
            if (task) {
                const newTitle = prompt('Edit task title:', task.title);
                if (newTitle && newTitle.trim() !== '') {
                    const updatedTask = { ...task, title: newTitle.trim() };
                    Storage.updateTask(id, updatedTask);
                    UI.displayTasks();
                    UI.showAlert('Task updated successfully', 'success');
                }
            }
        }
    });

    // Event: Filter tasks
    document.getElementById('filter-select').addEventListener('change', (e) => {
        const filter = e.target.value;
        let tasks = Storage.getTasks();
        
        if (filter === 'completed') {
            tasks = tasks.filter(task => task.completed);
        } else if (filter === 'pending') {
            tasks = tasks.filter(task => !task.completed);
        }
        
        UI.displayTasks(tasks);
    });

    // Event: Search tasks
    document.getElementById('search-input').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const tasks = Storage.getTasks().filter(task => 
            task.title.toLowerCase().includes(searchTerm)
        );
        UI.displayTasks(tasks);
    });

    // Event: Toggle theme
    document.getElementById('theme-toggle').addEventListener('change', () => {
        UI.toggleTheme();
    });

    // Event: Get new quote
    document.getElementById('new-quote-btn').addEventListener('click', async () => {
        await UI.displayQuote();
    });

    // Event: Filter by navigation
    document.getElementById('all-tasks').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('filter-select').value = 'all';
        UI.displayTasks();
    });

    document.getElementById('pending-tasks').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('filter-select').value = 'pending';
        UI.displayTasks(Storage.getTasks().filter(task => !task.completed));
    });

    document.getElementById('completed-tasks').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('filter-select').value = 'completed';
        UI.displayTasks(Storage.getTasks().filter(task => task.completed));
    });

    // Infinite scroll simulation
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
            // In a real app, you would load more tasks here
            // For this demo, we're just showing all tasks at once
        }
    });
});