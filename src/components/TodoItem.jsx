function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      {todo.text}{" "}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
