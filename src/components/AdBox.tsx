import { useEffect, useRef } from 'react';

const AdBox = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove previous children just in case
    if (containerRef.current) {
      containerRef.current.innerHTML = '';

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = '//www.highperformanceformat.com/c9f2fc1c3e2b83a6b037979a7f5ce639/invoke.js';

      // IMPORTANT: The ad script relies on a specific ID
      const adDiv = document.createElement('div');
      adDiv.id = 'ad-container-c9f2fc1c3e2b83a6b037979a7f5ce639';
      containerRef.current.appendChild(adDiv);
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default AdBox;
