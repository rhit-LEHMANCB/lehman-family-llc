// components/Footer.jsx
import React from "react";

const Footer = () => {
  
  return (
    <footer className="w-full bg-black text-white py-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © 2025 Lehman Family LLC. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            This website and its contents are the property of Lehman Family LLC. 
            Unauthorized use or reproduction is prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;