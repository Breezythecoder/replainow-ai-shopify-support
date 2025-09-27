// Minimal RUM endpoint for web-vitals data
import React from 'react';

const RUMApi = () => {
  // This would be handled by your server/edge function
  // For now, just log to console
  React.useEffect(() => {
    console.log('📊 RUM endpoint would receive web-vitals data here');
  }, []);

  return null;
};

export default RUMApi;
