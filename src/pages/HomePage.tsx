import React from 'react';
import AdvancedSearchForm from '../components/search/AdvancedSearchForm';
import DestinationCard from '../components/home/DestinationCard';
import { popularDestinations } from '../data/mockData';
import { MapPin, Star, CreditCard, Search, Settings } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="pt-20 pb-12 relative bg-cover bg-center min-h-[80vh] flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200')` 
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
              Find your perfect place to stay
            </h1>
            <p className="text-xl mb-8 drop-shadow-md">
              Compare prices from hundreds of booking sites to find the best deal
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <AdvancedSearchForm />
          </div>
        </div>
      </section>
      
      {/* Popular Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Book With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search and Compare</h3>
              <p className="text-gray-600">Find the best deals from hundreds of travel sites with just one search.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <CreditCard size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">What you see is what you pay, with no hidden charges or booking fees.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Millions of Options</h3>
              <p className="text-gray-600">Choose from millions of accommodations worldwide.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <Star size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Reviews</h3>
              <p className="text-gray-600">Read millions of genuine reviews to help find the perfect accommodation.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Steps */}
              <div className="flex flex-col items-center md:items-start md:w-1/2 md:pr-8">
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Search</h3>
                    <p className="text-gray-600">
                      Enter your destination, dates, and number of guests to start your search.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Compare</h3>
                    <p className="text-gray-600">
                      Compare prices from hundreds of booking sites to find the best deals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Book</h3>
                    <p className="text-gray-600">
                      Choose the best option and book directly with the booking site.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="mt-8 md:mt-0 md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/6214463/pexels-photo-6214463.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Person searching for hotels on a laptop" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get the Best Travel Deals</h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter and never miss out on exclusive deals
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-800"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-orange-500 rounded-md font-semibold hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm opacity-80">
              By subscribing, you agree to receive marketing emails from us. Don't worry, we respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;