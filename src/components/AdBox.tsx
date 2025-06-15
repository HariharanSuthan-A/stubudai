import { useEffect, useRef } from 'react';

const AdBox = () => {
  const adRef = useRef<HTMLDivElement>(null); // Strongly type the ref

  useEffect(() => {
    // Check if already injected to avoid duplication
    if (adRef.current && !adRef.current.querySelector('script')) {
      // Set ad container ID (required for some ad scripts)
      adRef.current.id = 'c9f2fc1c3e2b83a6b037979a7f5ce639';

      // Inject script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//www.highperformanceformat.com/c9f2fc1c3e2b83a6b037979a7f5ce639/invoke.js';
      script.async = true;

      adRef.current.appendChild(script);
    }

    return () => {
      // Cleanup to prevent duplicate ads on re-render
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
    };
  }, []);

  // Styling for ad box to reserve space
  return (
    <div
      ref={adRef}
      style={{ width: '320px', height: '50px', margin: '10px auto' }}
    />
  );
};

export default AdBox;
