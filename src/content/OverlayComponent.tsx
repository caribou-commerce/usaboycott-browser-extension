import React from 'react';
import { CA, US } from 'country-flag-icons/react/3x2';

interface CompanyData {
  flag: 'ca' | 'us';
  attributes: string[];
}

interface OverlayComponentProps {
  data: CompanyData;
}

const OverlayComponent: React.FC<OverlayComponentProps> = ({ data }) => {
  const FlagComponent = data.flag === 'ca' ? CA : US;
  const flagTitle = data.flag === 'ca' ? 'Canada' : 'United States';

  return (
    <div className="fixed bottom-4 right-4 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-[9999] font-sans">
      <div className="flex items-start gap-3">
        {/* Flag */}
        <div className="flex-shrink-0">
          <FlagComponent title={flagTitle} className="w-6 h-4" />
        </div>
        
        {/* Content */}
        <div className="flex-1">
          {/* Attributes */}
          <ul className="text-sm text-gray-700 space-y-1">
            {data.attributes.map((attribute, index) => (
              <li key={index} className="leading-tight">
                • {attribute}
              </li>
            ))}
          </ul>
          
          {/* Powered by link */}
          <div className="mt-3 pt-2 border-t border-gray-100">
            <a
              href="https://usaboycott.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-700 no-underline"
            >
              Powered by usaboycott.ca
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayComponent; 