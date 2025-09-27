import React, { useEffect } from 'react';
import { getRobotsTxt } from '@/utils/robotsGenerator';

const RobotsTXT = () => {
  useEffect(() => {
    // Generate robots.txt based on environment
    const environment = import.meta.env.MODE === 'production' ? 'production' : 'development';
    const robotsTxt = getRobotsTxt(environment);
    
    // Set content type to text/plain
    const headers = new Headers();
    headers.set('Content-Type', 'text/plain');
    
    // In a real implementation, this would be handled by the server
    // For now, we'll just log the robots.txt
    console.log('Generated Robots.txt:', robotsTxt);
    
    // In production, this would be served as a static text file
    // or generated server-side
  }, []);

  return null;
};

export default RobotsTXT;
