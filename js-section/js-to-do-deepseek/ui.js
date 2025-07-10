class UI {
    static displayTasks(tasks = Storage.getTasks()) {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        if (tasks.length === 0) {
            taskList.innerHTML = '<p class="no-tasks">No tasks found. Add a task to get started!</p>';
            return;
        }

        tasks.forEach(task => {
            UI.addTaskToDOM(task);
        });

        UI.updateStats();
    }

    static addTaskToDOM(task) {
        const taskList = document.getElementById('task-list');
        
        const taskCard = document.createElement('div');
        taskCard.className = `task-card ${task.completed ? 'completed' : 'pending'}`;
        taskCard.dataset.id = task.id;

        let imageHTML = '';
        const imageData = Storage.getTaskImage(task.id);
        if (imageData) {
            imageHTML = `<img src="${imageData}" alt="Task image" class="task-image">`;
        }

        taskCard.innerHTML = `
            ${imageHTML}
            <h3 class="task-title">${task.title}</h3>
            <p class="task-date">Created: ${new Date(task.date).toLocaleString()}</p>
            <div class="task-actions">
                <button class="complete-btn" data-id="${task.id}">
                    <i class="fas fa-${task.completed ? 'undo' : 'check'}"></i>
                </button>
                <button class="edit-btn" data-id="${task.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn" data-id="${task.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        taskList.appendChild(taskCard);
    }

    static clearFields() {
        document.getElementById('task-input').value = '';
        document.getElementById('task-image').value = '';
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.add-task');
        const form = document.getElementById('task-form');
        container.insertBefore(div, form);

        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static updateStats() {
        const tasks = Storage.getTasks();
        const totalTasks = tasks.length;
        const completedCount = tasks.filter(task => task.completed).length;
        const pendingCount = totalTasks - completedCount;

        document.getElementById('total-tasks').textContent = totalTasks;
        document.getElementById('completed-count').textContent = completedCount;
        document.getElementById('pending-count').textContent = pendingCount;
    }

    static toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    static loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        document.getElementById('theme-toggle').checked = savedTheme === 'dark';
    }

    static async displayQuote() {
        const quote = await API.getMotivationalQuote();
        document.getElementById('motivational-quote').textContent = quote;
    }

    static initNavbar() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.navbar-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}