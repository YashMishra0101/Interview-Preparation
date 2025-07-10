class Storage {
    static getTasks() {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }

    static addTask(task) {
        const tasks = Storage.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static updateTask(id, updatedTask) {
        const tasks = Storage.getTasks();
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            tasks[index] = updatedTask;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    static deleteTask(id) {
        const tasks = Storage.getTasks();
        const updatedTasks = tasks.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    static getTaskImage(id) {
        return localStorage.getItem(`task-image-${id}`);
    }

    static saveTaskImage(id, imageData) {
        localStorage.setItem(`task-image-${id}`, imageData);
    }

    static deleteTaskImage(id) {
        localStorage.removeItem(`task-image-${id}`);
    }
}