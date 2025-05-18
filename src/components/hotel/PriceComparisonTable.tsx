import React from 'react';
import { Check, Clock, X } from 'lucide-react';
import { PriceOption } from '../../types';

interface PriceComparisonTableProps {
  priceOptions: PriceOption[];
}

const PriceComparisonTable: React.FC<PriceComparisonTableProps> = ({ priceOptions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Booking Site
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Includes Taxes
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cancellation
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Pay at Stay
            </th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {priceOptions.map((option, index) => (
            <tr 
              key={option.provider} 
              className={index === 0 ? 'bg-orange-50' : ''}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 mr-3">
                    <img src={option.logo} alt={option.provider} className="h-10 w-10 object-contain" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {option.provider}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col">
                  {option.originalPrice && (
                    <span className="text-xs text-gray-500 line-through">
                      ${option.originalPrice}
                    </span>
                  )}
                  <span className="text-lg font-semibold text-gray-900">
                    ${option.price}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {option.includesTaxes ? (
                    <Check size={18} className="text-green-600" />
                  ) : (
                    <X size={18} className="text-red-500" />
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {option.freeCancellation ? (
                    <div className="flex items-center text-green-600">
                      <Check size={18} className="mr-1" />
                      <span className="text-sm">Free</span>
                    </div>
                  ) : (
                    <X size={18} className="text-red-500" />
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {option.payAtStay ? (
                    <div className="flex items-center text-blue-600">
                      <Clock size={18} className="mr-1" />
                      <span className="text-sm">Later</span>
                    </div>
                  ) : (
                    <span className="text-sm text-gray-500">Upfront</span>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <a
                  href={option.url}
                  className={`btn ${index === 0 ? 'btn-orange' : 'btn-primary'}`}
                  rel="noopener noreferrer"
                >
                  View Deal
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceComparisonTable;