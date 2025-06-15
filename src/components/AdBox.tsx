import { useEffect, useRef } from 'react';

const AdBox = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div id="ad-container"></div>
          <script type="text/javascript">
            var atOptions = {
              key: 'c9f2fc1c3e2b83a6b037979a7f5ce639',
              format: 'iframe',
              height: 50,
              width: 320,
              params: {}
            };
            document.write('<script type="text/javascript" src="//www.highperformanceformat.com/c9f2fc1c3e2b83a6b037979a7f5ce639/invoke.js"><\\/script>');
          </script>
        `,
      }}
    />
  );
};

export default AdBox;


