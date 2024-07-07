import { Twitter, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { kitchen } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-[#CDCDCD] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Furnish</h2>
            <p className="text-gray-600 mb-4">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#C2B931] hover:text-sky-600">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-[#C2B931] hover:text-sky-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-[#C2B931] hover:text-sky-600">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Amazing Deals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Quality Furniture</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Modern Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Best Support</a></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <div className="space-y-4">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <img src={kitchen} alt="Post thumbnail" className="w-16 h-16 object-cover rounded" />
                  <div>
                    <p className="text-[#C2B931] text-sm">Mar. 05, 2021 Admin</p>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Shop the Look Cottage Country Living Room</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Have a Questions?</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <MapPin className="text-[#C2B931] mt-1 flex-shrink-0" />
                <span className="text-gray-600">203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="text-[#C2B931] flex-shrink-0" />
                <span className="text-gray-600">+2 392 3929 210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="text-[#C2B931] flex-shrink-0" />
                <span className="text-gray-600">info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-sky-200 text-center text-gray-500 text-sm">
          Copyright ©2024 All rights reserved | This template is made with ♥ by Colorlib
        </div>
      </div>
    </footer>
  );
};

export default Footer;