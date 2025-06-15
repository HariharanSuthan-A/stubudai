import { useEffect, useRef } from 'react';

const AdBox = () => {
  const adRef = useRef(null);

  useEffect(() => {
    const atOptions = {
      key: 'c9f2fc1c3e2b83a6b037979a7f5ce639',
      format: 'iframe',
      height: 50,
      width: 320,
      params: {}
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.highperformanceformat.com/c9f2fc1c3e2b83a6b037979a7f5ce639/invoke.js';
    script.async = true;

    // Attach to container
    if (adRef.current) {
      adRef.current.appendChild(script);
    }

    return () => {
      // Clean up on unmount
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={adRef}></div>;
};

export default AdBox;
