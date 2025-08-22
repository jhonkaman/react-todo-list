import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";

function TodoList() {
  // State for the list of todos
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), text: "Learn HTML", completed: true },
    { id: crypto.randomUUID(), text: "Learn JavaScript", completed: false },
    { id: crypto.randomUUID(), text: "Learn React", completed: false }
  ]);
  // State to control whether completed todos are hidden
  const [hideCompleted, setHideCompleted] = useState(false);

  // Add a new todo
  const handleAdd = (text) => {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text, completed: false }
    ]);
  };

  // Delete a todo by id
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle the completed state of a todo by id
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Filter todos based on hideCompleted state
  const visibleTodos = hideCompleted
    ? todos.filter((todo) => !todo.completed)
    : todos;

  return (
    <>
      {/* App title */}
      <h1>React Todo List</h1>
      {/* Input for adding new todos */}
      <TodoInput onAdd={handleAdd} />
      {/* Filter to show/hide completed todos */}
      <TodoFilter
        hideCompleted={hideCompleted}
        onToggle={() => setHideCompleted(!hideCompleted)}
      />
      {/* List of visible todos */}
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
