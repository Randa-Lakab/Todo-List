var TodoApp = /** @class */ (function () {
    function TodoApp() {
        var _this = this;
        this.tasks = [];
        this.input = document.getElementById("taskInput");
        this.list = document.getElementById("taskList");
        this.addBtn = document.getElementById("addBtn");
        this.addBtn.addEventListener("click", function () { return _this.addTask(); });
    }
    //  Ajouter une tâche
    TodoApp.prototype.addTask = function () {
        var task = this.input.value.trim();
        if (task) {
            this.tasks.push(task);
            this.input.value = "";
            this.render();
        }
    };
    //  Supprimer une tâche
    TodoApp.prototype.removeTask = function (index) {
        this.tasks.splice(index, 1);
        this.render();
    };
    //  Toggle "complété"
    TodoApp.prototype.toggleTask = function (li) {
        li.classList.toggle("completed");
    };
    //  Afficher la liste
    TodoApp.prototype.render = function () {
        var _this = this;
        this.list.innerHTML = "";
        this.tasks.forEach(function (task, index) {
            var li = document.createElement("li");
            var span = document.createElement("span");
            span.textContent = task;
            span.addEventListener("click", function () { return _this.toggleTask(li); });
            var button = document.createElement("button");
            button.textContent = "×";
            button.addEventListener("click", function () { return _this.removeTask(index); });
            li.appendChild(span);
            li.appendChild(button);
            _this.list.appendChild(li);
        });
    };
    return TodoApp;
}());
//  Lancer l’app après chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    new TodoApp();
});
