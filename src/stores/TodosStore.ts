import { makeAutoObservable } from "mobx";
import { Complete, ITodo } from "../interfaces/Todo";

class TodosStore {
  todos: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo);
    console.log("Add");
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((item) => item.id !== id);
  }

  completeTodo(todo: ITodo) {
    todo.complete = Complete.COMPLETE;
  }

  changeTodo(todo: ITodo) {
    this.todos = this.todos.map((item) =>
      todo.id === item.id ? (item = todo) : item
    );
  }
}

export default new TodosStore();
