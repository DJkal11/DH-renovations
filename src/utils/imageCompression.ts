/**
 * Utility functions for image optimization and compression
 */

/**
 * Generates a responsive image srcset for different viewport sizes
 * 
 * @param basePath - The base path of the image
 * @param sizes - Array of sizes to generate srcset for
 * @returns A srcset string for use in img or source elements
 */
export function generateSrcSet(basePath: string, sizes: number[] = [320, 640, 960, 1280, 1920]): string {
  // Extract file extension
  const extension = basePath.split('.').pop() || '';
  const baseWithoutExtension = basePath.substring(0, basePath.lastIndexOf('.'));
  
  // Generate srcset string
  return sizes
    .map(size => `${baseWithoutExtension}-${size}.${extension} ${size}w`)
    .join(', ');
}

/**
 * Determines if an image should be lazy loaded based on its position
 * 
 * @param position - The position of the image ("above-fold", "below-fold")
 * @returns Whether the image should be lazy loaded
 */
export function shouldLazyLoad(position: 'above-fold' | 'below-fold' | 'critical'): boolean {
  return position !== 'above-fold' && position !== 'critical';
}

/**
 * Generates a low-quality image placeholder URL
 * This is a simplified version - in a real app, you'd generate actual LQIP data
 * 
 * @param imagePath - The path to the original image
 * @returns A placeholder image URL or data URI
 */
export function getLQIP(imagePath: string): string {
  // In a real implementation, this would generate or return a real LQIP
  // For now, we'll just return a path to a hypothetical placeholder
  return `${imagePath.substring(0, imagePath.lastIndexOf('.'))}-placeholder.jpg`;
}

/**
 * Determines the appropriate loading strategy based on image importance
 * 
 * @param importance - The importance of the image ("high", "medium", "low")
 * @returns The loading attribute value
 */
export function getLoadingStrategy(importance: 'high' | 'medium' | 'low'): 'eager' | 'lazy' {
  return importance === 'high' ? 'eager' : 'lazy';
}

/**
 * Calculates the aspect ratio for an image
 * 
 * @param width - The width of the image
 * @param height - The height of the image
 * @returns The aspect ratio as a string (e.g., "16/9")
 */
export function calculateAspectRatio(width: number, height: number): string {
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(width, height);
  return `${width / divisor}/${height / divisor}`;
}

/**
 * Checks if the browser supports modern image formats
 * 
 * @param format - The image format to check support for
 * @returns Whether the format is supported
 */
export function supportsImageFormat(format: 'webp' | 'avif'): boolean {
  if (typeof document === 'undefined') return false;
  
  const formats = {
    webp: 'image/webp',
    avif: 'image/avif'
  };
  
  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL(formats[format]).indexOf(`data:${formats[format]}`) === 0;
  }
  
  return false;
}