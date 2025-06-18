/**
 * Debounce function to limit how often a function can be called
 * Useful for expensive operations like resize or scroll events
 * 
 * @param func - The function to debounce
 * @param wait - The time to wait in milliseconds
 * @param immediate - Whether to call the function immediately
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate: boolean = false
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(this: any, ...args: Parameters<T>) {
    const context = this;
    
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
  };
}

/**
 * Throttle function to limit how often a function can be called
 * Ensures the function is called at most once in the specified time period
 * 
 * @param func - The function to throttle
 * @param limit - The time limit in milliseconds
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;
  
  return function(this: any, ...args: Parameters<T>) {
    const context = this;
    
    if (!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

/**
 * Request animation frame wrapper for smooth animations
 * 
 * @param callback - The callback function to execute
 */
export function rafCallback(callback: FrameRequestCallback): number {
  return window.requestAnimationFrame(callback);
}

/**
 * Cancel animation frame
 * 
 * @param id - The ID returned by rafCallback
 */
export function cancelRaf(id: number): void {
  window.cancelAnimationFrame(id);
}

/**
 * Detect if the device is a mobile device
 */
export function isMobileDevice(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Detect if the device has a touch screen
 */
export function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Detect if the connection is slow
 */
export function isSlowConnection(): boolean {
  const connection = (navigator as any).connection || 
                    (navigator as any).mozConnection || 
                    (navigator as any).webkitConnection;
  
  if (connection) {
    return connection.effectiveType === 'slow-2g' || 
           connection.effectiveType === '2g' || 
           connection.saveData === true;
  }
  
  return false;
}