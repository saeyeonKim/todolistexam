import "./App.css";
import React, { useState } from "react";

function App() {
  const [contents, setContents] = useState([
    {
      id: 1,
      todo: "react를 배워봅시다.",
      isDone: true,
    },
    {
      id: 2,
      todo: "useState를 배워봅시다.",
      isDone: true,
    },
  ]);

  const [todo, setTodo] = useState("");

  const addUserHandler = () => {
    const newContent = {
      id: contents.length + 1,
      todo: todo,
      isDone: true,
    };
    setContents([...contents, newContent]);
  };

  return (
    <div className="App">
      <input value={todo} onChange={(e) => setTodo(e.target.value)}></input>
      <button onClick={addUserHandler}>추가하기</button>
      <h1>Todo List</h1>
      <div className="mycard">{todo}</div>
    </div>
  );
}

export default App;
