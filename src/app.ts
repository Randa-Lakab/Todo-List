class TodoApp {
  private tasks: string[] = [];
  private input: HTMLInputElement;
  private list: HTMLUListElement;
  private addBtn: HTMLButtonElement;

  constructor() {
    this.input = document.getElementById("taskInput") as HTMLInputElement;
    this.list = document.getElementById("taskList") as HTMLUListElement;
    this.addBtn = document.getElementById("addBtn") as HTMLButtonElement;

    this.addBtn.addEventListener("click", () => this.addTask());
  }

  // ➕ Ajouter une tâche
  private addTask(): void {
    const task = this.input.value.trim();
    if (task) {
      this.tasks.push(task);
      this.input.value = "";
      this.render();
    }
  }

  // 🗑️ Supprimer une tâche
  private removeTask(index: number): void {
    this.tasks.splice(index, 1);
    this.render();
  }

  // ✅ Toggle "complété"
  private toggleTask(li: HTMLLIElement): void {
    li.classList.toggle("completed");
  }

  // 🎨 Afficher la liste
  private render(): void {
    this.list.innerHTML = "";

    this.tasks.forEach((task, index) => {
      const li = document.createElement("li") as HTMLLIElement;

      const span = document.createElement("span") as HTMLSpanElement;
      span.textContent = task;
      span.addEventListener("click", () => this.toggleTask(li));

      const button = document.createElement("button") as HTMLButtonElement;
      button.textContent = "❌";
      button.addEventListener("click", () => this.removeTask(index));

      li.appendChild(span);
      li.appendChild(button);
      this.list.appendChild(li);
    });
  }
}

// 🚀 Lancer l’app après chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  new TodoApp();
});