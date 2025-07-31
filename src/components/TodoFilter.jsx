function TodoFilter({ hideCompleted, onToggle }) {
  return (
    <>
      <input
        type="checkbox"
        checked={hideCompleted}
        onChange={onToggle}
      />
      <label>Hide Completed</label>
    </>
  );
}

export default TodoFilter;
