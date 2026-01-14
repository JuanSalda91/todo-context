import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

export function TodoInput() {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be done?"
        className="todo-input"
        aria-label="New todo text"
      />
      <button type="submit" className="add-btn">
        Add Todo
      </button>
    </form>
  );
}
