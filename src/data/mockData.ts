import { Hotel, Location, PriceOption } from '../types';

// Popular destinations
export const popularDestinations: Location[] = [
  {
    id: 'new-york',
    name: 'New York',
    country: 'United States',
    image: 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience the energy of the Big Apple',
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The City of Light awaits',
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover the blend of tradition and innovation',
  },
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'History meets modern culture',
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    image: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ancient wonders and Italian charm',
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Beaches, architecture, and vibrant culture',
  },
];

// Mock hotels data
export const hotels: Hotel[] = [
  {
    id: 'hotel-1',
    name: 'Grand Plaza Hotel',
    description: 'Luxury hotel in the heart of the city with panoramic views and world-class amenities. Featuring spacious rooms, fine dining restaurants, a spa, and fitness center.',
    location: {
      city: 'New York',
      country: 'United States',
      address: '123 Broadway Ave, New York, NY 10001',
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    images: [
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    stars: 5,
    rating: {
      score: 9.2,
      count: 2453,
      category: 'Excellent',
    },
    price: {
      base: 350,
      current: 305,
      discount: 15,
      taxesAndFees: 45,
    },
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Fitness Center', 'Restaurant', 'Room Service', 'Parking', 'Bar'],
    propertyType: 'Hotel',
    distanceFromCenter: 0.8,
    deals: {
      freeCancellation: true,
      payAtStay: true,
      specialOffer: '15% off for early booking',
    },
  },
  {
    id: 'hotel-2',
    name: 'Urban Loft Suites',
    description: 'Modern suites in a trendy neighborhood with fully equipped kitchens and stylish decor. Perfect for extended stays with home-like comforts.',
    location: {
      city: 'New York',
      country: 'United States',
      address: '456 SoHo Street, New York, NY 10012',
      coordinates: {
        latitude: 40.7234,
        longitude: -73.9982,
      },
    },
    images: [
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    stars: 4,
    rating: {
      score: 8.9,
      count: 1876,
      category: 'Very Good',
    },
    price: {
      base: 250,
      current: 225,
      discount: 10,
      taxesAndFees: 35,
    },
    amenities: ['Free WiFi', 'Kitchen', 'Laundry', 'Air Conditioning', 'Workspace', 'TV'],
    propertyType: 'Apartment',
    distanceFromCenter: 1.5,
    deals: {
      freeCancellation: true,
      payAtStay: false,
    },
  },
  {
    id: 'hotel-3',
    name: 'Seaside Resort & Spa',
    description: 'Beachfront resort with stunning ocean views, multiple pools, and a full-service spa. Offering water sports, beachside dining, and spacious balconies.',
    location: {
      city: 'Miami',
      country: 'United States',
      address: '789 Ocean Drive, Miami Beach, FL 33139',
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    images: [
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    stars: 5,
    rating: {
      score: 9.5,
      count: 3217,
      category: 'Exceptional',
    },
    price: {
      base: 425,
      current: 340,
      discount: 20,
      taxesAndFees: 55,
    },
    amenities: ['Beach Access', 'Free WiFi', 'Multiple Pools', 'Spa', 'Restaurant', 'Bar', 'Water Sports', 'Gym'],
    propertyType: 'Resort',
    distanceFromCenter: 3.2,
    deals: {
      freeCancellation: true,
      payAtStay: true,
      specialOffer: 'Includes breakfast and spa credit',
    },
  },
  {
    id: 'hotel-4',
    name: 'Downtown Business Hotel',
    description: 'Professional hotel catering to business travelers with meeting facilities, high-speed internet, and convenient location near corporate centers.',
    location: {
      city: 'Chicago',
      country: 'United States',
      address: '321 Michigan Ave, Chicago, IL 60601',
      coordinates: {
        latitude: 41.8781,
        longitude: -87.6298,
      },
    },
    images: [
      'https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/260928/pexels-photo-260928.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    stars: 4,
    rating: {
      score: 8.7,
      count: 2108,
      category: 'Very Good',
    },
    price: {
      base: 280,
      current: 280,
      taxesAndFees: 40,
    },
    amenities: ['Free WiFi', 'Business Center', 'Meeting Rooms', 'Restaurant', 'Gym', 'Parking', 'Room Service'],
    propertyType: 'Hotel',
    distanceFromCenter: 0.5,
  },
  {
    id: 'hotel-5',
    name: 'Historic Boutique Inn',
    description: 'Charming inn in a restored historic building with unique rooms and personalized service. Located in a picturesque neighborhood with character and history.',
    location: {
      city: 'Boston',
      country: 'United States',
      address: '45 Beacon Hill, Boston, MA 02108',
      coordinates: {
        latitude: 42.3601,
        longitude: -71.0589,
      },
    },
    images: [
      'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    stars: 4,
    rating: {
      score: 9.3,
      count: 1538,
      category: 'Excellent',
    },
    price: {
      base: 320,
      current: 288,
      discount: 10,
      taxesAndFees: 42,
    },
    amenities: ['Free WiFi', 'Breakfast Included', 'Garden', 'Lounge', 'Concierge', 'Library'],
    propertyType: 'Inn',
    distanceFromCenter: 1.2,
    deals: {
      freeCancellation: true,
      payAtStay: true,
    },
  },
];

// Generate more hotels by cloning and modifying existing ones
export const generateMoreHotels = (count: number): Hotel[] => {
  const moreHotels: Hotel[] = [];
  const cities = ['London', 'Paris', 'Tokyo', 'Rome', 'Barcelona', 'Berlin', 'Sydney', 'Dubai', 'India'];
  const hotelTypes = ['Hotel', 'Resort', 'Apartment', 'Guesthouse', 'Villa', 'Inn', 'Hostel'];
  
  for (let i = 0; i < count; i++) {
    const baseHotel = hotels[i % hotels.length];
    const cityIndex = i % cities.length;
    
    moreHotels.push({
      ...baseHotel,
      id: `hotel-${i + 6}`,
      name: `${cities[cityIndex]} ${hotelTypes[i % hotelTypes.length]} ${i + 1}`,
      location: {
        ...baseHotel.location,
        city: cities[cityIndex],
      },
      stars: Math.min(5, Math.max(1, Math.floor(Math.random() * 5) + 1)),
      price: {
        base: 150 + Math.floor(Math.random() * 350),
        current: 150 + Math.floor(Math.random() * 300),
        discount: Math.random() > 0.5 ? Math.floor(Math.random() * 30) : undefined,
        taxesAndFees: 20 + Math.floor(Math.random() * 50),
      },
      rating: {
        score: 6 + Math.random() * 4,
        count: 500 + Math.floor(Math.random() * 3000),
        category: 'Good',
      },
      propertyType: hotelTypes[i % hotelTypes.length],
      distanceFromCenter: Math.random() * 5,
    });
  }
  
  return moreHotels;
};

// Mock price comparison data
export const getPriceOptions = (hotelId: string): PriceOption[] => {
  // This would normally come from different providers' APIs
  const hotel = [...hotels, ...generateMoreHotels(20)].find(h => h.id === hotelId);
  
  if (!hotel) return [];
  
  const basePrice = hotel.price.current;
  
  return [
    {
      provider: 'Booking.com',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/free-booking-44-432202.png',
      price: basePrice,
      includesTaxes: true,
      freeCancellation: true,
      payAtStay: false,
      url: '#',
    },
    {
      provider: 'Hotels.com',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/free-hotels-com-304062.png',
      price: basePrice + Math.floor(Math.random() * 20) - 10,
      includesTaxes: true,
      freeCancellation: true,
      payAtStay: true,
      url: '#',
    },
    {
      provider: 'Expedia',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/free-expedia-282229.png',
      price: basePrice + Math.floor(Math.random() * 30) - 15,
      originalPrice: basePrice + 40,
      includesTaxes: false,
      freeCancellation: Math.random() > 0.5,
      payAtStay: Math.random() > 0.5,
      url: '#',
    },
    {
      provider: 'Agoda',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/free-agoda-226491.png',
      price: basePrice + Math.floor(Math.random() * 25) - 20,
      includesTaxes: true,
      freeCancellation: Math.random() > 0.3,
      payAtStay: true,
      url: '#',
    },
    {
      provider: 'Direct',
      logo: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/hotel-logo-7-596284.png',
      price: basePrice - 5,
      includesTaxes: true,
      freeCancellation: true,
      payAtStay: false,
      url: '#',
    },
  ].sort((a, b) => a.price - b.price);
};

// All hotels data
export const getAllHotels = (): Hotel[] => {
  return [...hotels, ...generateMoreHotels(45)];
};

// Get suggestions for location search
export const getLocationSuggestions = (query: string): Location[] => {
  if (!query.trim()) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return popularDestinations.filter(
    location => 
      location.name.toLowerCase().includes(normalizedQuery) || 
      location.country.toLowerCase().includes(normalizedQuery)
  );
};

// Get hotel by ID
export const getHotelById = (id: string): Hotel | undefined => {
  return [...hotels, ...generateMoreHotels(45)].find(hotel => hotel.id === id);
};

// Search hotels with filters
export const searchHotels = (
  location: string,
  filters: {
    minPrice?: number;
    maxPrice?: number;
    stars?: number[];
    propertyTypes?: string[];
    amenities?: string[];
    distance?: number;
  },
  sortBy: string = 'recommended'
): Hotel[] => {
  let filteredHotels = getAllHotels().filter(hotel => 
    !location || 
    hotel.location.city.toLowerCase().includes(location.toLowerCase()) ||
    hotel.location.country.toLowerCase().includes(location.toLowerCase())
  );
  
  // Apply price filter
  if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
    filteredHotels = filteredHotels.filter(hotel => {
      const price = hotel.price.current;
      return (filters.minPrice === undefined || price >= filters.minPrice) && 
             (filters.maxPrice === undefined || price <= filters.maxPrice);
    });
  }
  
  // Apply star rating filter
  if (filters.stars && filters.stars.length > 0) {
    filteredHotels = filteredHotels.filter(hotel => 
      filters.stars?.includes(hotel.stars)
    );
  }
  
  // Apply property type filter
  if (filters.propertyTypes && filters.propertyTypes.length > 0) {
    filteredHotels = filteredHotels.filter(hotel => 
      filters.propertyTypes?.includes(hotel.propertyType)
    );
  }
  
  // Apply amenities filter
  if (filters.amenities && filters.amenities.length > 0) {
    filteredHotels = filteredHotels.filter(hotel => 
      filters.amenities?.every(amenity => hotel.amenities.includes(amenity))
    );
  }
  
  // Apply distance filter
  if (filters.distance !== undefined) {
    filteredHotels = filteredHotels.filter(hotel => 
      hotel.distanceFromCenter <= filters.distance!
    );
  }
  
  // Apply sorting
  switch (sortBy) {
    case 'price-low':
      filteredHotels.sort((a, b) => a.price.current - b.price.current);
      break;
    case 'price-high':
      filteredHotels.sort((a, b) => b.price.current - a.price.current);
      break;
    case 'rating':
      filteredHotels.sort((a, b) => b.rating.score - a.rating.score);
      break;
    case 'distance':
      filteredHotels.sort((a, b) => a.distanceFromCenter - b.distanceFromCenter);
      break;
    case 'recommended':
    default:
      // Sort by a combination of rating and price for "recommended"
      filteredHotels.sort((a, b) => {
        const scoreA = a.rating.score * 10 - a.price.current / 100;
        const scoreB = b.rating.score * 10 - b.price.current / 100;
        return scoreB - scoreA;
      });
      break;
  }
  
  return filteredHotels;
};