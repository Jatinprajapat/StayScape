import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface SearchFilters {
  minPrice: number;
  maxPrice: number;
  stars: number[];
  propertyTypes: string[];
  amenities: string[];
  distance?: number;
}

export interface SearchParams {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: {
    adults: number;
    children: number;
    rooms: number;
  };
  filters: SearchFilters;
  sortBy: string;
}

interface SearchContextType {
  searchParams: SearchParams;
  updateSearchParams: (params: Partial<SearchParams>) => void;
  updateFilters: (filters: Partial<SearchFilters>) => void;
}

const defaultSearchParams: SearchParams = {
  location: '',
  checkIn: null,
  checkOut: null,
  guests: {
    adults: 2,
    children: 0,
    rooms: 1,
  },
  filters: {
    minPrice: 0,
    maxPrice: 500,
    stars: [],
    propertyTypes: [],
    amenities: [],
    distance: undefined,
  },
  sortBy: 'recommended',
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchParams, setSearchParams] = useState<SearchParams>(defaultSearchParams);

  const updateSearchParams = (params: Partial<SearchParams>) => {
    setSearchParams((prev) => ({ ...prev, ...params }));
  };

  const updateFilters = (filters: Partial<SearchFilters>) => {
    setSearchParams((prev) => ({
      ...prev,
      filters: { ...prev.filters, ...filters },
    }));
  };

  return (
    <SearchContext.Provider value={{ searchParams, updateSearchParams, updateFilters }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};