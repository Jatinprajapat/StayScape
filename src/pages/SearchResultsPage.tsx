import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlidersHorizontal, ArrowDownAZ, ArrowUpAZ, Star, TrendingUp } from 'lucide-react';
import SearchForm from '../components/search/SearchForm';
import HotelCard from '../components/search/HotelCard';
import FilterPanel from '../components/search/FilterPanel';
import { useSearch } from '../context/SearchContext';
import { searchHotels } from '../data/mockData';
import { Hotel } from '../types';

const SearchResultsPage: React.FC = () => {
  const { searchParams, updateSearchParams } = useSearch();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  // Fetch hotels based on search params
  useEffect(() => {
    setLoading(true);
    
    // Simulate API request delay
    const timer = setTimeout(() => {
      const results = searchHotels(
        searchParams.location,
        searchParams.filters,
        searchParams.sortBy
      );
      setHotels(results);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [searchParams]);

  // Handle sort change
  const handleSortChange = (sortValue: string) => {
    updateSearchParams({ sortBy: sortValue });
  };

  // Toggle filters on mobile
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Format search summary text
  const getSearchSummary = () => {
    let summary = '';
    
    if (searchParams.location) {
      summary += `Hotels in ${searchParams.location}`;
    } else {
      summary = 'All Hotels';
    }
    
    if (searchParams.checkIn && searchParams.checkOut) {
      const options = { month: 'short', day: 'numeric' } as const;
      const checkIn = searchParams.checkIn.toLocaleDateString('en-US', options);
      const checkOut = searchParams.checkOut.toLocaleDateString('en-US', options);
      summary += ` · ${checkIn} - ${checkOut}`;
    }
    
    if (searchParams.guests) {
      const { adults, children, rooms } = searchParams.guests;
      summary += ` · ${adults + children} guest${adults + children !== 1 ? 's' : ''}`;
      if (rooms > 1) {
        summary += `, ${rooms} rooms`;
      }
    }
    
    return summary;
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      {/* Search Form */}
      <div className="sticky top-16 z-10 bg-white shadow-md py-3">
        <div className="container mx-auto px-4">
          <SearchForm isCompact={true} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6">
        {/* Search summary */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{getSearchSummary()}</h1>
          <p className="text-gray-600">
            {loading ? 'Searching for hotels...' : `${hotels.length} properties found`}
          </p>
        </div>
        
        {/* Mobile filter toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={toggleFilters}
            className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md bg-white shadow-sm text-gray-700"
          >
            <SlidersHorizontal size={18} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters panel - for desktop or when toggled on mobile */}
          <div className={`md:w-1/4 ${showFilters || 'hidden md:block'}`}>
            <FilterPanel />
          </div>
          
          {/* Hotel listings */}
          <div className="md:w-3/4">
            {/* Sort options */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h2 className="text-lg font-semibold mb-3 sm:mb-0">Sort Results</h2>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
                      searchParams.sortBy === 'recommended'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => handleSortChange('recommended')}
                  >
                    <Star size={16} className="mr-1" />
                    Recommended
                  </button>
                  <button
                    className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
                      searchParams.sortBy === 'price-low'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => handleSortChange('price-low')}
                  >
                    <ArrowDownAZ size={16} className="mr-1" />
                    Price (Low to High)
                  </button>
                  <button
                    className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
                      searchParams.sortBy === 'price-high'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => handleSortChange('price-high')}
                  >
                    <ArrowUpAZ size={16} className="mr-1" />
                    Price (High to Low)
                  </button>
                  <button
                    className={`flex items-center px-3 py-1.5 rounded-full text-sm ${
                      searchParams.sortBy === 'rating'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => handleSortChange('rating')}
                  >
                    <TrendingUp size={16} className="mr-1" />
                    Rating
                  </button>
                </div>
              </div>
            </div>
            
            {/* Loading state */}
            {loading ? (
              <div className="flex flex-col items-center justify-center h-64">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600">Finding the best hotel deals...</p>
              </div>
            ) : hotels.length > 0 ? (
              // Hotel results
              <div>
                {hotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            ) : (
              // No results
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No hotels found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any hotels matching your search criteria. Try adjusting your filters or search for a different location.
                </p>
                <button
                  onClick={() => navigate('/')}
                  className="btn btn-primary"
                >
                  Start a New Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;