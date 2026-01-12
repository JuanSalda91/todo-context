import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';

// define the theme type //

type Theme = 'light' | 'dark';

// Define the context type //

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// Create the context //

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component //

export function ThemeProvider({ children }: {children: ReactNode}) {
    // init state from localstorage or default to 'light' //
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme');
        return (savedTheme as Theme) || 'light';
    });

    // Persist theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}