import { observer } from "mobx-react-lite";
import TodosStore from "../stores/TodosStore";

import React, { FormEvent, useState } from "react";
import { Complete, ITodo } from "../interfaces/Todo";

export const Home = observer(() => {
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const todo: ITodo = {
      id: Math.random(),
      title: inputValue,
      complete: Complete.UNCOMPLETE,
    };

    TodosStore.addTodo(todo);
  };

  return (
    <>
      <form>
        <input
          name={"title-todo"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type={"submit"} onClick={(e) => onSubmitHandler(e)}>
          Add Todo
        </button>
      </form>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {TodosStore.todos.map((item: ITodo) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
});
