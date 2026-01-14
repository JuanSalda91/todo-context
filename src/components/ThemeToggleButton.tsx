import { useTheme } from '../context/ThemeContext.tsx';

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'} Switch to {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
