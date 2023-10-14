import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    
      <footer className="bg-gray-900 text-white pd-2 md:p-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4">
          <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
          <p>
            <FaEnvelope className="inline mr-2" />
            Email: contact@example.com
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-2xl font-bold mb-4">About Us</h4>
          <p>Your go-to destination for the latest fashion trends.</p>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-2xl font-bold mb-4">Policies</h4>
          <ul className="list-disc list-inside">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Return Policy</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-2xl font-bold mb-4">Social Media</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaPinterest size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
   
  );
}
