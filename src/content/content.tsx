import { createRoot } from 'react-dom/client';
import OverlayComponent from './OverlayComponent';
import companiesData from '../data/companies.json';

interface CompanyData {
  flag: 'ca' | 'us';
  attributes: string[];
}

function normalizeHostname(hostname: string): string {
  // Remove www. prefix if present
  return hostname.replace(/^www\./, '');
}

function lookupCompanyData(hostname: string): CompanyData | null {
  const normalizedHostname = normalizeHostname(hostname);
  return (companiesData as Record<string, CompanyData>)[normalizedHostname] || null;
}

function injectOverlay(data: CompanyData): void {
  // Check if overlay already exists
  const existingOverlay = document.getElementById('usaboycott-overlay');
  if (existingOverlay) {
    existingOverlay.remove();
  }

  // Create overlay container
  const overlayContainer = document.createElement('div');
  overlayContainer.id = 'usaboycott-overlay';
  
  // Append to body
  document.body.appendChild(overlayContainer);

  // Create React root and render component
  const root = createRoot(overlayContainer);
  root.render(<OverlayComponent data={data} />);
}

function init(): void {
  const hostname = window.location.hostname;
  const companyData = lookupCompanyData(hostname);
  
  if (companyData) {
    injectOverlay(companyData);
  }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Also run on navigation (for SPAs)
let currentUrl = window.location.href;
const observer = new MutationObserver(() => {
  if (window.location.href !== currentUrl) {
    currentUrl = window.location.href;
    init();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
}); 