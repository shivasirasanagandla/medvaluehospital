// Google Maps utility functions

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

// Function to load Google Maps API
export const loadGoogleMapsApi = (apiKey: string): Promise<boolean> => {
  return new Promise((resolve) => {
    // Check if Google Maps API is already loaded
    if (window.google && window.google.maps) {
      resolve(true);
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Set up callback
    window.initMap = () => {
      resolve(true);
    };

    // Handle script loading errors
    script.onerror = () => {
      console.error('Failed to load Google Maps API');
      resolve(false);
    };

    // Add script to document
    document.head.appendChild(script);
  });
};

// Function to create a map
export const createMap = (element: HTMLElement, options: google.maps.MapOptions): google.maps.Map => {
  return new window.google.maps.Map(element, options);
};

// Function to create a marker
export const createMarker = (options: google.maps.MarkerOptions): google.maps.Marker => {
  return new window.google.maps.Marker(options);
};

// Function to create an info window
export const createInfoWindow = (options: google.maps.InfoWindowOptions): google.maps.InfoWindow => {
  return new window.google.maps.InfoWindow(options);
};
