import React, { useState } from 'react';
import { useSearch } from '../../context/SearchContext';
import { X } from 'lucide-react';

const FilterPanel: React.FC = () => {
  const { searchParams, updateFilters } = useSearch();
  const { filters } = searchParams;
  
  // Local state to manage filter values before applying
  const [priceRange, setPriceRange] = useState([filters.minPrice, filters.maxPrice]);
  const [selectedStars, setSelectedStars] = useState<number[]>(filters.stars);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(filters.propertyTypes);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(filters.amenities);
  const [distance, setDistance] = useState<number | undefined>(filters.distance);
  
  const propertyTypes = ['Hotel', 'Apartment', 'Resort', 'Villa', 'Guesthouse', 'Hostel', 'Inn'];
  const amenities = ['Free WiFi', 'Breakfast Included', 'Pool', 'Parking', 'Air Conditioning', 'Restaurant', 'Fitness Center', 'Spa', 'Pet Friendly'];
  
  // Handle star rating change
  const handleStarChange = (star: number) => {
    const newSelectedStars = selectedStars.includes(star)
      ? selectedStars.filter(s => s !== star)
      : [...selectedStars, star].sort();
    
    setSelectedStars(newSelectedStars);
    updateFilters({ stars: newSelectedStars });
  };
  
  // Handle property type change
  const handlePropertyTypeChange = (type: string) => {
    const newSelectedTypes = selectedPropertyTypes.includes(type)
      ? selectedPropertyTypes.filter(t => t !== type)
      : [...selectedPropertyTypes, type];
    
    setSelectedPropertyTypes(newSelectedTypes);
    updateFilters({ propertyTypes: newSelectedTypes });
  };
  
  // Handle amenity change
  const handleAmenityChange = (amenity: string) => {
    const newSelectedAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter(a => a !== amenity)
      : [...selectedAmenities, amenity];
    
    setSelectedAmenities(newSelectedAmenities);
    updateFilters({ amenities: newSelectedAmenities });
  };
  
  // Handle price range change
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>, boundary: 'min' | 'max') => {
    const value = parseInt(event.target.value, 10);
    const newPriceRange = [...priceRange] as [number, number];
    
    if (boundary === 'min') {
      newPriceRange[0] = Math.min(value, newPriceRange[1]);
    } else {
      newPriceRange[1] = Math.max(value, newPriceRange[0]);
    }
    
    setPriceRange(newPriceRange);
    updateFilters({
      minPrice: newPriceRange[0],
      maxPrice: newPriceRange[1]
    });
  };
  
  // Handle distance change
  const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setDistance(value);
    updateFilters({ distance: value });
  };
  
  // Reset all filters
  const resetFilters = () => {
    setPriceRange([0, 500]);
    setSelectedStars([]);
    setSelectedPropertyTypes([]);
    setSelectedAmenities([]);
    setDistance(undefined);
    
    updateFilters({
      minPrice: 0,
      maxPrice: 500,
      stars: [],
      propertyTypes: [],
      amenities: [],
      distance: undefined
    });
  };
  
  // Check if any filters are applied
  const hasFilters = () => {
    return (
      selectedStars.length > 0 ||
      selectedPropertyTypes.length > 0 ||
      selectedAmenities.length > 0 ||
      distance !== undefined ||
      priceRange[0] > 0 ||
      priceRange[1] < 500
    );
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        {hasFilters() && (
          <button 
            onClick={resetFilters}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
          >
            <X size={16} className="mr-1" />
            Clear all filters
          </button>
        )}
      </div>
      
      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Price per night</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">${priceRange[0]}</span>
          <span className="text-sm text-gray-600">${priceRange[1]}</span>
        </div>
        <div className="relative">
          <div className="h-1 bg-gray-200 rounded-full"></div>
          <div 
            className="absolute h-1 bg-blue-600 rounded-full" 
            style={{ 
              left: `${(priceRange[0] / 500) * 100}%`,
              right: `${100 - (priceRange[1] / 500) * 100}%`,
              top: 0
            }}
          ></div>
        </div>
        <div className="flex gap-4 mt-4">
          <div>
            <label htmlFor="min-price" className="block text-sm text-gray-600 mb-1">Min</label>
            <input
              type="number"
              id="min-price"
              min="0"
              max="500"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 'min')}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            />
          </div>
          <div>
            <label htmlFor="max-price" className="block text-sm text-gray-600 mb-1">Max</label>
            <input
              type="number"
              id="max-price"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 'max')}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            />
          </div>
        </div>
      </div>
      
      {/* Star Rating */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Star rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center">
              <input
                type="checkbox"
                id={`star-${star}`}
                checked={selectedStars.includes(star)}
                onChange={() => handleStarChange(star)}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={`star-${star}`} className="ml-2 flex items-center">
                {Array.from({ length: star }).map((_, i) => (
                  <Star key={i} filled />
                ))}
                {Array.from({ length: 5 - star }).map((_, i) => (
                  <Star key={i} filled={false} />
                ))}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Property Type */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Property type</h3>
        <div className="space-y-2">
          {propertyTypes.map((type) => (
            <div key={type} className="flex items-center">
              <input
                type="checkbox"
                id={`type-${type}`}
                checked={selectedPropertyTypes.includes(type)}
                onChange={() => handlePropertyTypeChange(type)}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={`type-${type}`} className="ml-2">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Distance from center */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Distance from center</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">0 km</span>
          <span className="text-sm text-gray-600">
            {distance !== undefined ? `${distance} km` : '5+ km'}
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={distance || 5}
          onChange={handleDistanceChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Near center</span>
          <span>Further away</span>
        </div>
      </div>
      
      {/* Amenities */}
      <div>
        <h3 className="font-medium mb-3">Amenities</h3>
        <div className="space-y-2">
          {amenities.map((amenity) => (
            <div key={amenity} className="flex items-center">
              <input
                type="checkbox"
                id={`amenity-${amenity.replace(/\s+/g, '-').toLowerCase()}`}
                checked={selectedAmenities.includes(amenity)}
                onChange={() => handleAmenityChange(amenity)}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label 
                htmlFor={`amenity-${amenity.replace(/\s+/g, '-').toLowerCase()}`} 
                className="ml-2"
              >
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Star component for ratings
interface StarProps {
  filled: boolean;
}

const Star: React.FC<StarProps> = ({ filled }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default FilterPanel;