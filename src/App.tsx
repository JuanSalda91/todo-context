import { AppProviders } from './context/AppProviders.tsx';
import { useTheme } from './context/ThemeContext.tsx';
import { ThemeToggleButton } from './components/ThemeToggleButton.tsx';
import { TodoInput } from './components/TodoInput.tsx';
import { FilterButtons } from './components/FilterButton.tsx';
import { TodoList } from './components/TodoList.tsx';

// Separate component to access theme context
function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <header className="app-header">
          <h1>Todo App (Context API)</h1>
          <ThemeToggleButton />
        </header>

        <main className="app-main">
          <TodoInput />
          <FilterButtons />
          <TodoList />
        </main>

        <footer className="app-footer">
          <p>Built with React Context API</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProviders>
      <AppContent />
    </AppProviders>
  );
}

export default App;
