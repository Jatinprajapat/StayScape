import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft, Star, Wifi, Coffee, Car, Utensils, PlusCircle, MinusCircle } from 'lucide-react';
import SearchForm from '../components/search/SearchForm';
import ImageGallery from '../components/hotel/ImageGallery';
import PriceComparisonTable from '../components/hotel/PriceComparisonTable';
import { getHotelById, getPriceOptions } from '../data/mockData';
import { Hotel, PriceOption } from '../types';

const HotelDetailPage: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [priceOptions, setPriceOptions] = useState<PriceOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedDescription, setExpandedDescription] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    // Simulate API request delay
    const timer = setTimeout(() => {
      const hotelData = getHotelById(id);
      if (hotelData) {
        setHotel(hotelData);
        setPriceOptions(getPriceOptions(id));
      }
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);

  // Generate stars for display
  const renderStars = (count: number) => {
    return Array.from({ length: count }).map((_, index) => (
      <Star key={index} size={18} className="fill-current text-yellow-400" />
    ));
  };

  // Map amenity to its icon
  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Free WiFi':
        return <Wifi size={18} />;
      case 'Breakfast Included':
        return <Coffee size={18} />;
      case 'Parking':
        return <Car size={18} />;
      case 'Restaurant':
        return <Utensils size={18} />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-gray-600">Loading hotel details...</p>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen pt-20 bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Hotel Not Found</h1>
            <p className="text-gray-600 mb-6">
              The hotel you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/search" className="btn btn-primary">
              <ArrowLeft size={18} className="mr-2" />
              Back to Search Results
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      {/* Search bar */}
      <div className="sticky top-16 z-10 bg-white shadow-md py-3">
        <div className="container mx-auto px-4">
          <SearchForm isCompact={true} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Back button */}
        <div className="mb-4">
          <Link 
            to="/search" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft size={18} className="mr-1" />
            Back to search results
          </Link>
        </div>

        {/* Hotel header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {hotel.name}
              </h1>
              <div className="flex items-center mb-3">
                <div className="flex mr-3">
                  {renderStars(hotel.stars)}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span>{hotel.location.address}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-3 md:mt-0">
              <div className="bg-blue-600 text-white p-2 rounded font-bold text-lg mr-2">
                {hotel.rating.score.toFixed(1)}
              </div>
              <div>
                <div className="font-medium">{hotel.rating.category}</div>
                <div className="text-sm text-gray-500">{hotel.rating.count} reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Image gallery */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <ImageGallery images={hotel.images} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          {/* Hotel details */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">About this property</h2>
              <div className="mb-4">
                <p className={`text-gray-700 ${!expandedDescription && 'line-clamp-4'}`}>
                  {hotel.description}
                </p>
                {hotel.description && hotel.description.length > 200 && (
                  <button 
                    onClick={() => setExpandedDescription(!expandedDescription)}
                    className="text-blue-600 mt-2 flex items-center hover:text-blue-800"
                  >
                    {expandedDescription ? (
                      <>
                        <MinusCircle size={16} className="mr-1" />
                        Show less
                      </>
                    ) : (
                      <>
                        <PlusCircle size={16} className="mr-1" />
                        Read more
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Property highlights */}
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-3">Main amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      {getAmenityIcon(amenity) && (
                        <span className="mr-2 text-gray-600">{getAmenityIcon(amenity)}</span>
                      )}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Location</h2>
              <div className="bg-gray-200 h-64 rounded-lg mb-4 overflow-hidden">
                {/* This would be a map in a real implementation */}
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-gray-600">
                    <MapPin size={24} className="mx-auto mb-2" />
                    <span>{hotel.location.address}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                This property is located in {hotel.location.city}, {hotel.location.country}, approximately {hotel.distanceFromCenter.toFixed(1)} km from the city center.
              </p>
            </div>
          </div>

          {/* Price comparison and booking */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
              <h2 className="text-xl font-bold mb-4">Price Comparison</h2>
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">Price for 1 night, {hotel.guests?.adults || 2} adults</div>
                {hotel.price.discount && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="line-through text-gray-500">${hotel.price.base}</span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                      Save {hotel.price.discount}%
                    </span>
                  </div>
                )}
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">${hotel.price.current}</span>
                  <span className="text-gray-600 ml-2">total</span>
                </div>
                <div className="text-sm text-gray-500">Includes taxes & fees</div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-2">
                  Compare prices from different providers and get the best deal:
                </p>
                <PriceComparisonTable priceOptions={priceOptions} />
              </div>
              
              <div className="mt-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800 mb-4">
                  <div className="font-semibold mb-1">Limited-time deal</div>
                  <p>This property is in high demand! Book now before it's too late.</p>
                </div>
                
                <a 
                  href={priceOptions[0]?.url || '#'} 
                  className="btn btn-orange w-full text-center"
                  rel="noopener noreferrer"
                >
                  View Deal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailPage;