import { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <>
      <label htmlFor="todo-input">Add a todo: </label>
      <input
        id="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}

export default TodoInput;
