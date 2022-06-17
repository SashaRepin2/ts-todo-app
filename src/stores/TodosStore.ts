import { makeAutoObservable } from "mobx";
import { TodoStatuses, ITodo } from "../interfaces/ITodo";

class TodosStore {
  todos: ITodo[] = [];
  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
    this.loadTodos();
  }

  loadTodos() {
    console.log("Loading todos...");
    const loadedTodos: ITodo[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    console.log(loadedTodos);
    this.todos = loadedTodos;
  }

  saveTodos() {
    console.log("Saving todos");
    console.log(this.todos);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: ITodo) {
    console.log("Add a new todo");
    // this.todos = [todo, ...this.todos];
    this.todos.push(todo);
    console.log(todo);
    this.saveTodos();
  }

  removeTodo(id: number) {
    console.log("Remove a todo from array");
    this.todos = this.todos.filter((item) => item.id !== id);
    this.saveTodos();
  }

  completeTodo(todo: ITodo) {
    console.log("Change a completed status");
    todo.status = TodoStatuses.COMPLETE;
    this.saveTodos();
  }

  changeTodo(todo: ITodo) {
    this.todos = this.todos.map((item) =>
      todo.id === item.id ? (item = todo) : item
    );
    this.saveTodos();
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.status === TodoStatuses.COMPLETE)
      .length;
  }
}

export default new TodosStore();
