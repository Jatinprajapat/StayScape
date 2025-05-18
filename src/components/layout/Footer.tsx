import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CreditCard,
  Mail,
  Shield,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 border-b border-gray-700 pb-10">
          <div className="flex items-center space-x-4">
            <CreditCard size={24} className="text-blue-400" />
            <div>
              <h4 className="font-medium text-lg text-white">Secure Payment</h4>
              <p className="text-gray-400 text-sm">
                All major credit cards accepted
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail size={24} className="text-blue-400" />
            <div>
              <h4 className="font-medium text-lg text-white">24/7 Support</h4>
              <p className="text-gray-400 text-sm">Help when you need it</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Shield size={24} className="text-blue-400" />
            <div>
              <h4 className="font-medium text-lg text-white">
                Price Guarantee
              </h4>
              <p className="text-gray-400 text-sm">
                Get the best deals available
              </p>
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Press Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  New York
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  London
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Paris
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tokyo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-2">Download Our App</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-sm bg-black text-white px-3 py-2 rounded flex items-center justify-center"
              >
                <span>Available on the App Store</span>
              </a>
              <a
                href="#"
                className="text-sm bg-black text-white px-3 py-2 rounded flex items-center justify-center"
              >
                <span>Get it on Google Play</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="flex items-center space-x-1 mr-3">
              <div className="flex">
                <div className="h-6 w-3 bg-blue-600 rounded-l"></div>
                <div className="h-6 w-3 bg-blue-600 mx-0.5"></div>
                <div className="h-6 w-3 bg-orange-500 rounded-r"></div>
              </div>
              <span className="font-bold text-lg text-white">StayScape</span>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} StayScape. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
