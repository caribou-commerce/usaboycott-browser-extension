import React from 'react';

interface CompanyData {
  flag: 'ca' | 'us';
  attributes: string[];
}

interface OverlayComponentProps {
  data: CompanyData;
}

const OverlayComponent: React.FC<OverlayComponentProps> = ({ data }) => {
  const flagCode = data.flag === 'ca' ? 'CA' : 'US';
  const flagTitle = data.flag === 'ca' ? 'Canada' : 'United States';
  
  // TODO: For production, consider bundling flag assets locally instead of external CDN
  // This currently uses the GitHub Pages mirror for country-flag-icons
  const flagUrl = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${flagCode}.svg`;

  return (
    <div className="overlay-content flex flex-col">

        <div className="overlay-content-main flex flex-row">
      {/* Flag */}
      <div className="flag-container">
        <img 
          src={flagUrl}
          alt={flagTitle}
          title={flagTitle}
        />
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
      </div>
      </div>
        {/* Powered by link */}
        <div className="powered-by-container">
        <div className="powered-by">
            <span>Powered by</span>           
            <a
                href="https://usaboycott.ca"
                target="_blank"
                rel="noopener noreferrer"
            >usaboycott.ca
            </a>
        </div>
        </div>
    </div>
  );
};

export default OverlayComponent; 