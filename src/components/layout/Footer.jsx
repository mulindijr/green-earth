import { FaLeaf, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FOOTER_LINKS } from '../../config/data';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <FaLeaf className="text-2xl" />
            <span className="font-bold text-xl">GreenEarth</span>
          </div>
          <p className="text-gray-400">
            Dedicated to protecting our planet and promoting sustainable living for future generations.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.quick.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Get Involved</h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.involvement.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            {FOOTER_LINKS.legal.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © 2025 GreenEarth. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          Made with <span className="text-red-500">♥</span> by <a href="https://github.com/mulindijr/green-earth" className='text-green-600 hover:text-green-800 font-semibold underline transition-colors'>Mulindi</a>
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;