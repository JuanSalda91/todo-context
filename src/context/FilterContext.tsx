import { createContext, useContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';

// Define the filter type
type Filter = 'all' | 'active' | 'completed';

// Define the context type
interface FilterContextType {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

// Create the context
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Provider component
export function FilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<Filter>('all');

  // Memoize the context value
  const value = useMemo(() => ({ filter, setFilter }), [filter]);

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}

// Custom hook to use the filter context
export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}