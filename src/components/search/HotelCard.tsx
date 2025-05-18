import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel } from '../../types';
import { Star, MapPin, Wifi, Utensils, Dumbbell as DumbBell, Space as Spa, Coffee } from 'lucide-react';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Free WiFi':
        return <Wifi size={16} />;
      case 'Restaurant':
        return <Utensils size={16} />;
      case 'Fitness Center':
        return <DumbBell size={16} />;
      case 'Spa':
        return <Spa size={16} />;
      case 'Breakfast Included':
        return <Coffee size={16} />;
      default:
        return null;
    }
  };

  // Get top 4 amenities that have icons
  const topAmenities = hotel.amenities
    .filter(amenity => 
      ['Free WiFi', 'Restaurant', 'Fitness Center', 'Spa', 'Breakfast Included'].includes(amenity)
    )
    .slice(0, 4);

  const displayDiscountPercent = hotel.price.discount ? `Save ${hotel.price.discount}%` : null;

  return (
    <div className="card overflow-hidden mb-6 animate-fade-in hover:shadow-lg transition-shadow">
      <div className="md:flex">
        {/* Hotel image */}
        <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
          <img 
            src={hotel.images[0]} 
            alt={hotel.name} 
            className="w-full h-full object-cover"
          />
          {displayDiscountPercent && (
            <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">
              {displayDiscountPercent}
            </div>
          )}
        </div>

        {/* Hotel information */}
        <div className="p-4 md:p-6 md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {hotel.name}
                </h3>
                <div className="flex items-center mt-1 mb-2">
                  {/* Star rating */}
                  <div className="flex mr-3">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <Star key={i} size={16} className="fill-current text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin size={14} className="mr-1" />
                    <span>{hotel.location.city}, {hotel.distanceFromCenter.toFixed(1)} km from center</span>
                  </div>
                </div>
              </div>

              {/* User rating */}
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-2">
                    {hotel.rating.category}
                  </div>
                  <div className="bg-blue-600 text-white px-2 py-1 rounded font-bold">
                    {hotel.rating.score.toFixed(1)}
                  </div>
                </div>
                <div className="text-gray-500 text-xs mt-1">
                  {hotel.rating.count} reviews
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-3 my-3">
              {topAmenities.map((amenity, index) => (
                <div key={index} className="flex items-center text-gray-700 text-sm">
                  <span className="mr-1">{getAmenityIcon(amenity)}</span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>

            {/* Deals tags */}
            {hotel.deals && (
              <div className="flex flex-wrap gap-2 mt-3">
                {hotel.deals.freeCancellation && (
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                    Free cancellation
                  </span>
                )}
                {hotel.deals.payAtStay && (
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                    Pay at the property
                  </span>
                )}
                {hotel.deals.specialOffer && (
                  <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded-full">
                    {hotel.deals.specialOffer}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Price and CTA */}
          <div className="flex justify-between items-center mt-4">
            <div>
              {hotel.price.discount && (
                <div className="line-through text-gray-500 text-sm">
                  ${hotel.price.base}
                </div>
              )}
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-900">
                  ${hotel.price.current}
                </span>
                <span className="text-sm text-gray-600 ml-1">per night</span>
              </div>
              <div className="text-xs text-gray-500">
                includes taxes & fees
              </div>
            </div>
            <Link 
              to={`/hotel/${hotel.id}`}
              className="btn btn-orange"
            >
              View Deal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;