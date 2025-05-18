import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Search, Calendar, Users, X } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { getLocationSuggestions } from '../../data/mockData';
import { Location } from '../../types';

interface SearchFormProps {
  isCompact?: boolean;
  className?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ isCompact = false, className = '' }) => {
  const { searchParams, updateSearchParams } = useSearch();
  const [locationInput, setLocationInput] = useState(searchParams.location);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    searchParams.checkIn,
    searchParams.checkOut
  ]);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const [suggestions, setSuggestions] = useState<Location[]>([]);
  const [checkIn, checkOut] = dateRange;
  
  const locationInputRef = useRef<HTMLInputElement>(null);
  const guestsDropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Handle location input change and show suggestions
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocationInput(value);
    
    if (value.trim().length > 0) {
      const results = getLocationSuggestions(value);
      setSuggestions(results);
      setShowLocationDropdown(results.length > 0);
    } else {
      setSuggestions([]);
      setShowLocationDropdown(false);
    }
  };

  // Select a location from suggestions
  const handleLocationSelect = (location: Location) => {
    setLocationInput(location.name);
    updateSearchParams({ location: location.name });
    setShowLocationDropdown(false);
  };

  // Clear location input
  const clearLocationInput = () => {
    setLocationInput('');
    updateSearchParams({ location: '' });
    setSuggestions([]);
    setShowLocationDropdown(false);
  };

  // Handle date changes
  const handleDateChange = (dates: [Date | null, Date | null]) => {
    setDateRange(dates);
    updateSearchParams({
      checkIn: dates[0],
      checkOut: dates[1]
    });
  };

  // Handle guests changes
  const handleGuestChange = (type: 'adults' | 'children' | 'rooms', value: number) => {
    const guests = { ...searchParams.guests };
    
    // Ensure we don't go below minimum values
    if (type === 'adults') {
      guests.adults = Math.max(1, value);
    } else if (type === 'children') {
      guests.children = Math.max(0, value);
    } else if (type === 'rooms') {
      guests.rooms = Math.max(1, value);
    }
    
    updateSearchParams({ guests });
  };

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLocationDropdown(false);
    setShowGuestsDropdown(false);
    
    // Update search params before navigating
    updateSearchParams({
      location: locationInput,
      checkIn: dateRange[0],
      checkOut: dateRange[1]
    });
    
    navigate('/search');
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationInputRef.current && 
        !locationInputRef.current.contains(event.target as Node)
      ) {
        setShowLocationDropdown(false);
      }
      
      if (
        guestsDropdownRef.current && 
        !guestsDropdownRef.current.contains(event.target as Node)
      ) {
        setShowGuestsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Format dates for display
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return format(date, 'EEE, MMM d');
  };

  // Format guests count for display
  const formatGuests = () => {
    const { adults, children, rooms } = searchParams.guests;
    return `${adults} adult${adults !== 1 ? 's' : ''}, ${children} child${
      children !== 1 ? 'ren' : ''
    }, ${rooms} room${rooms !== 1 ? 's' : ''}`;
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className} ${
        isCompact ? 'p-2' : 'p-4'
      }`}
    >
      <div className={`flex flex-col md:flex-row ${isCompact ? 'md:items-center' : ''}`}>
        {/* Location input */}
        <div className={`relative flex-grow ${isCompact ? 'md:mr-2' : 'md:mr-4 mb-3 md:mb-0'}`} ref={locationInputRef}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={18} className="text-gray-500" />
          </div>
          <input
            type="text"
            value={locationInput}
            onChange={handleLocationChange}
            placeholder="Where are you going?" required
            className={`w-full pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 ${
              isCompact ? 'text-sm' : ''
            }`}
            onClick={() => setShowLocationDropdown(suggestions.length > 0)}
          />
          {locationInput && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={clearLocationInput}
            >
              <X size={16} className="text-gray-500 hover:text-gray-700" />
            </button>
          )}
          
          {/* Location suggestions dropdown */}
          {showLocationDropdown && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg animate-slide-up">
              <ul className="py-1 max-h-60 overflow-auto">
                {suggestions.map((location) => (
                  <li
                    key={location.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => handleLocationSelect(location)}
                  >
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <Search size={16} className="text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">{location.name}</div>
                      <div className="text-sm text-gray-500">{location.country}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Date picker */}
        <div className={`relative ${isCompact ? 'md:mr-2' : 'md:mx-4 mb-3 md:mb-0'}`}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Calendar size={18} className="text-gray-500" />
          </div>
          <DatePicker
            selected={checkIn}
            onChange={handleDateChange}
            startDate={checkIn}
            endDate={checkOut}
            selectsRange
            minDate={new Date()}
            monthsShown={2}
            placeholderText="Check-in — Check-out"
            className={`w-full md:w-56 pl-10 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 ${
              isCompact ? 'text-sm' : ''
            }`}
            value={
              checkIn && checkOut
                ? `${formatDate(checkIn)} — ${formatDate(checkOut)}`
                : checkIn
                ? `${formatDate(checkIn)} — ?`
                : 'Check-in — Check-out'
            }
          />
        </div>
        
        {/* Guests dropdown */}
        <div className={`relative ${isCompact ? 'md:mr-2' : 'mb-3 md:mb-0'}`} ref={guestsDropdownRef}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Users size={18} className="text-gray-500" />
          </div>
          <button
            type="button"
            className={`w-full md:w-64 pl-10 py-2 border border-gray-300 rounded-md text-left ${
              isCompact ? 'text-sm' : ''
            }`}
            onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
          >
            {formatGuests()}
          </button>
          
          {/* Guests dropdown menu */}
          {showGuestsDropdown && (
            <div className="absolute z-10 mt-1 w-64 bg-white border border-gray-300 rounded-md shadow-lg animate-slide-up">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <label className="font-medium">Adults</label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                      onClick={() => handleGuestChange('adults', searchParams.guests.adults - 1)}
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{searchParams.guests.adults}</span>
                    <button
                      type="button"
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                      onClick={() => handleGuestChange('adults', searchParams.guests.adults + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <label className="font-medium">Children</label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                      onClick={() => handleGuestChange('children', searchParams.guests.children - 1)}
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{searchParams.guests.children}</span>
                    <button
                      type="button"
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                      onClick={() => handleGuestChange('children', searchParams.guests.children + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <label className="font-medium">Rooms</label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                      onClick={() => handleGuestChange('rooms', searchParams.guests.rooms - 1)}
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{searchParams.guests.rooms}</span>
                    <button
                      type="button"
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                      onClick={() => handleGuestChange('rooms', searchParams.guests.rooms + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <button
                  type="button"
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => setShowGuestsDropdown(false)}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Search button */}
        <button
          type="submit"
          className={`btn ${isCompact ? 'btn-primary py-1 px-4' : 'btn-primary py-2 px-8'}`}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;