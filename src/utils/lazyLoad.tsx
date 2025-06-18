import { lazy, Suspense, ComponentType } from 'react';

// Loading component to show while the actual component is loading
const LoadingFallback = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
  </div>
);

// Helper function to lazy load components with a suspense fallback
export function lazyLoad<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback = <LoadingFallback />
) {
  const LazyComponent = lazy(importFunc);
  
  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
}