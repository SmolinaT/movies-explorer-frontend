import React from 'react';

export const useResize = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
     function handleResize(evt) {
      setWidth(evt.target.innerWidth);
     }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (width);
};