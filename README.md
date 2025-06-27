# Buy-Canadian Overlay Chrome Extension

A Chrome extension that shows quick Canada-vs-U.S. company info overlay on visited websites.


https://github.com/user-attachments/assets/cb56c586-4ccc-452a-a22a-9b126ed8fb6e


## Features

- Detects website domains and shows Canadian/US company information
- Clean, minimal overlay that appears in bottom-right corner
- Flag icons and company attributes
- Only shows overlay when data is available (unobtrusive)

## Installation & Testing

### 1. Build the Extension

```bash
npm install
npm run build:extension
```

This creates a `dist/` folder with the packaged extension.

### 2. Load in Chrome as Unpacked Extension

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right)
3. Click "Load unpacked"
4. Select the `dist/` folder from this project
5. The extension should now be loaded

### 3. Test the Extension

Visit these test domains to see the overlay in action:

- **Netflix** - Go to `netflix.com` (shows US flag and attributes)
- **Crave** - Go to `crave.ca` (shows Canadian flag and attributes)  
- **MEC** - Go to `mec.ca` (shows Canadian flag and attributes)
- **Sail** - Go to `sail.ca` (shows Canadian flag and attributes)

On other domains, no overlay will appear (as designed).

### 4. Expected Behavior

When visiting a domain with data:
- Small overlay appears in bottom-right corner
- Shows country flag (🇨🇦 or 🇺🇸) 
- Lists 3 company attributes
- "Powered by usaboycott.ca" link at bottom

## Development

### File Structure

```
src/
├── content/
│   ├── content.tsx          # Content script entry point
│   └── OverlayComponent.tsx # React overlay component  
├── data/
│   └── companies.json       # Company lookup data
└── manifest.json           # Chrome extension manifest

dist/                       # Built extension (load this in Chrome)
├── manifest.json
├── content.js
├── content.css
└── icons/
```

### Technologies Used

- **React + TypeScript** - Component development
- **Tailwind CSS** - Styling
- **Vite** - Build tooling
- **country-flag-icons** - SVG flag components

### Adding New Companies

Edit `src/data/companies.json` and add entries like:

```json
{
  "example.com": {
    "flag": "ca",
    "attributes": [
      "Headquarters in Canada", 
      "Products made in Canada",
      "X% of employees based in Canada"
    ]
  }
}
```

Then rebuild with `npm run build:extension`.

## Troubleshooting

- **Overlay not appearing**: Check if the domain exists in `companies.json`
- **Build fails**: Ensure all dependencies are installed with `npm install`
- **Extension not loading**: Make sure you selected the `dist/` folder, not the project root

## Demo

The extension demonstrates:
- ✅ Domain detection and normalization
- ✅ JSON data lookup  
- ✅ React component injection
- ✅ Tailwind styling
- ✅ SVG flag icons
- ✅ Chrome Extension Manifest V3 compatibility
