import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Location } from '../../types';
import { useSearch } from '../../context/SearchContext';

interface DestinationCardProps {
  destination: Location;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const navigate = useNavigate();
  const { updateSearchParams } = useSearch();

  const handleClick = () => {
    updateSearchParams({ location: destination.name });
    navigate('/search');
  };

  return (
    <div 
      className="card group cursor-pointer overflow-hidden h-64 relative"
      onClick={handleClick}
    >
      {/* Image with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-5 w-full">
        <h3 className="text-white text-2xl font-bold">{destination.name}</h3>
        <p className="text-white/90 text-sm">{destination.country}</p>
        {destination.description && (
          <p className="text-white/80 mt-1 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {destination.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default DestinationCard;