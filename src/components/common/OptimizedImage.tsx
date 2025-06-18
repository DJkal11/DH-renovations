import { memo, useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  sizes = '100vw',
  loading = 'lazy',
  decoding = 'async',
  objectFit = 'cover',
  priority = false,
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // If priority is true, use eager loading instead of lazy
  const loadingStrategy = priority ? 'eager' : loading;
  
  // Handle image load event
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };
  
  // Handle image error event
  const handleError = () => {
    if (onError) onError();
  };
  
  // Apply blur-up effect when image is loading
  const imageClasses = `transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`;
  const objectFitClass = `object-${objectFit}`;
  
  return (
    <div className={`relative overflow-hidden ${width ? '' : 'w-full'} ${height ? '' : 'h-full'}`}>
      {/* Low quality placeholder - could be replaced with a real LQIP in production */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse" 
          style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
          aria-hidden="true"
        />
      )}
      
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={loadingStrategy}
        decoding={decoding}
        onLoad={handleLoad}
        onError={handleError}
        className={`${imageClasses} ${objectFitClass}`}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;