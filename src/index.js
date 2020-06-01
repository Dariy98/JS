function Todo(title, description, completed) {
  this.title = title;
  this.description = description;
  this.completed = completed;
}

const objTodos = {
  todos: [
    { title: "Задача 1", description: "Сделать что-то", completed: false }, // 0
    { title: "Задача 2", description: "Сделать что-то", completed: true }, // 1
    { title: "Задача 3", description: "Сделать что-то", completed: false } // 2
  ],
  addTodo(title, description, completed = false) {
    const todo = new Todo(title, description, completed);
    return [...this.todos, todo];
  },
  toggleTodo(index) {
    return this.todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
  },
  deleteTodo(index) {
    return this.todos.filter((_, i) => i !== index);
  },
  updateTodo(index, { title, description, completed }) {
    let newObj = new Todo(title, description, completed);
    return this.todos.map((todo, i) => {
      if (i === index) {
        if (title === undefined) newObj.title = todo.title;
        if (description === undefined) newObj.description = todo.description;
        if (completed === undefined) newObj.completed = todo.completed;
        return (todo = newObj);
      }
      return todo;
    });
  },
  filterTodos(filter) {
    return this.todos.filter(todo => {
      if (filter === "active") return todo.completed === false;
      if (filter === "completed") return todo.completed === true;
      return this.todos;
    });
  },
  searchTodos(search) {
    return this.todos.filter(todo => {
      return todo.title.includes(search);
    });
  },
  toggleTodos(completed) {
    return this.todos.map(todo => {
      todo.completed = completed;
      return todo;
    });
  },
  clearCompletedTodos() {
    return this.todos.filter(todo => todo.completed === false);
  }
};
const a = new Todo("Test", "TestDEsc", false);
console.log(a);
const b = objTodos.addTodo("ADD", "desc");
console.log(b);
const c = objTodos.toggleTodo(1);
console.log(c);
const d = objTodos.deleteTodo(1);
console.log(d);
const e = objTodos.updateTodo(1, { description: "TEST" });
console.log(e);
const f = objTodos.filterTodos("active");
console.log(f);
const g = objTodos.searchTodos("2");
console.log(g);
// const h = objTodos.toggleTodos(true);
// console.log(h);
// // ЧТОБЫ РАБОТАЛА НИЖНЯЯ НУЖНО ЗАКОМЕНТИТЬ ВЕРХНЮЮ
console.log(objTodos.clearCompletedTodos());
