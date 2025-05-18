import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullScreen, setShowFullScreen] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const toggleFullScreen = () => {
    setShowFullScreen(!showFullScreen);
  };

  // Get thumbnail images (show up to 4 and add a +X button if more)
  const thumbnails = images.slice(0, 4);
  const remainingCount = images.length - 4;

  return (
    <>
      {/* Main gallery view */}
      <div className="relative mb-4">
        {/* Featured image */}
        <div 
          className="h-72 md:h-96 overflow-hidden rounded-lg cursor-pointer"
          onClick={toggleFullScreen}
        >
          <img 
            src={images[currentIndex]} 
            alt="Hotel" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Image counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {thumbnails.map((img, index) => (
          <div 
            key={index}
            className={`h-20 rounded-lg overflow-hidden cursor-pointer ${
              index === currentIndex ? 'ring-2 ring-blue-600' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img 
              src={img} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {remainingCount > 0 && (
          <div 
            className="h-20 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer"
            onClick={toggleFullScreen}
          >
            <span className="font-medium text-gray-700">+{remainingCount} more</span>
          </div>
        )}
      </div>

      {/* Fullscreen gallery */}
      {showFullScreen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          {/* Close button */}
          <div className="p-4 flex justify-end">
            <button 
              onClick={toggleFullScreen}
              className="text-white p-2 rounded-full hover:bg-gray-800"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main image */}
          <div className="flex-grow flex items-center justify-center relative">
            <img 
              src={images[currentIndex]} 
              alt="Hotel" 
              className="max-h-full max-w-full object-contain"
            />

            {/* Navigation arrows */}
            <button 
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 p-3 rounded-full text-white hover:bg-black/40 transition-colors"
            >
              <ChevronLeft size={30} />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 p-3 rounded-full text-white hover:bg-black/40 transition-colors"
            >
              <ChevronRight size={30} />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="p-4 bg-black/80">
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {images.map((img, index) => (
                <div 
                  key={index}
                  className={`h-16 w-24 flex-shrink-0 rounded overflow-hidden cursor-pointer ${
                    index === currentIndex ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;