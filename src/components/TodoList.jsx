import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: "Buy groceries", completed: false },
    { id: crypto.randomUUID(), text: "Read a book", completed: false },
    { id: crypto.randomUUID(), text: "Go for a walk", completed: false }
  ]);
  const [hideCompleted, setHideCompleted] = useState(false);

  const handleAdd = (text) => {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text, completed: false }
    ]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const visibleTodos = hideCompleted
    ? todos.filter((todo) => !todo.completed)
    : todos;

  return (
    <>
      <TodoInput onAdd={handleAdd} />
      <TodoFilter
        hideCompleted={hideCompleted}
        onToggle={() => setHideCompleted(!hideCompleted)}
      />
      <ul>
        {visibleTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
