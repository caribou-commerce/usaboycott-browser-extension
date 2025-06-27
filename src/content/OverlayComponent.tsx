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
    <div className="overlay-content">
      {/* Flag */}
      <div className="flag-container">
        <FlagComponent title={flagTitle} />
      </div>
      
      {/* Content */}
      <div className="content-area">
        {/* Attributes */}
        <ul className="attributes-list">
          {data.attributes.map((attribute, index) => (
            <li key={index}>
              {attribute}
            </li>
          ))}
        </ul>
        
        {/* Powered by link */}
        <div className="powered-by">
          <a
            href="https://usaboycott.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by usaboycott.ca
          </a>
        </div>
      </div>
    </div>
  );
};

export default OverlayComponent; 