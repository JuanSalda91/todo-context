import { useTodos } from '../context/TodoContext';
import { useFilter } from '../context/FilterContext';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { todos, clearCompleted } = useTodos();
  const { filter } = useFilter();

  // Filter todos based on current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  // Check if there are any completed todos
  const hasCompletedTodos = todos.some((todo) => todo.completed);

  return (
    <div className="todo-list-container">
      {filteredTodos.length === 0 ? (
        <p className="empty-state">
          {filter === 'all'
            ? 'No todos yet! Add one above.'
            : filter === 'active'
            ? 'No active todos!'
            : 'No completed todos!'}
        </p>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}

      {hasCompletedTodos && (
        <button onClick={clearCompleted} className="clear-completed-btn">
          Clear Completed
        </button>
      )}
    </div>
  );
}
