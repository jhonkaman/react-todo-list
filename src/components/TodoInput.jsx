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
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}

export default TodoInput;
