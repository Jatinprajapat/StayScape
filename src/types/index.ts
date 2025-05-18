export interface Location {
  id: string;
  name: string;
  country: string;
  image: string;
  description?: string;
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  location: {
    city: string;
    country: string;
    address: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  images: string[];
  stars: number;
  rating: {
    score: number;
    count: number;
    category: string;
  };
  price: {
    base: number;
    current: number;
    discount?: number;
    taxesAndFees: number;
  };
  amenities: string[];
  propertyType: string;
  distanceFromCenter: number;
  deals?: {
    freeCancellation?: boolean;
    payAtStay?: boolean;
    specialOffer?: string;
  };
}

export interface PriceOption {
  provider: string;
  logo: string;
  price: number;
  originalPrice?: number;
  includesTaxes: boolean;
  freeCancellation: boolean;
  payAtStay: boolean;
  url: string;
}