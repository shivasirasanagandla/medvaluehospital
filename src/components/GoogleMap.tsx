interface GoogleMapProps {
  className?: string;
}

const GoogleMap = ({ 
  className = 'w-full h-96 rounded-lg',
}: GoogleMapProps) => {
  // Using OpenStreetMap with a more reliable embed
  const openStreetMapUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=78.3665,17.4925,78.3865,17.5125&layer=mapnik&marker=17.5025,78.3765';

  return (
    <div className={`${className} w-full h-full bg-gray-100 rounded-lg overflow-hidden shadow-md`}>
      <div className="aspect-w-16 aspect-h-9 w-full h-full">
        <iframe 
          src={openStreetMapUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ValueMed Healthcare Location"
          className="min-h-[300px] w-full h-full"
          aria-label="Location of ValueMed Healthcare on map"
        />
      </div>
    </div>
  );
};

export default GoogleMap;
