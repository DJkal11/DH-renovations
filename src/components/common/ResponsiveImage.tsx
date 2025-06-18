import { memo, useState, useEffect } from 'react';
import { supportsImageFormat, shouldLazyLoad, getLoadingStrategy } from '../../utils/imageCompression';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  srcSet?: string;
  sizes?: string;
  position?: 'above-fold' | 'below-fold' | 'critical';
  importance?: 'high' | 'medium' | 'low';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
  onError?: () => void;
}

const ResponsiveImage = memo(({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  srcSet,
  sizes = '100vw',
  position = 'below-fold',
  importance = 'medium',
  objectFit = 'cover',
  onLoad,
  onError
}: ResponsiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState(false);
  
  // Check for WebP support
  useEffect(() => {
    setSupportsWebP(supportsImageFormat('webp'));
  }, []);
  
  // Determine loading strategy
  const loading = shouldLazyLoad(position) ? getLoadingStrategy(importance) : 'eager';
  
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
  
  // Use WebP if supported
  const optimizedSrc = supportsWebP && src.endsWith('.jpg') 
    ? src.replace('.jpg', '.webp') 
    : src;
  
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
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`${imageClasses} ${objectFitClass}`}
      />
    </div>
  );
});

ResponsiveImage.displayName = 'ResponsiveImage';

export default ResponsiveImage;