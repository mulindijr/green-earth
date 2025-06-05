import { useState } from 'react';
import { FaLeaf, FaBars, FaTimes } from 'react-icons/fa';
import { smoothScroll } from '../../utils/scroll';

const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
    const handleNavClick = (e, target) => {
        e.preventDefault();
        smoothScroll(target);
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4 cursor-pointer" onClick={() => smoothScroll('#home')}>
                        <FaLeaf className="text-2xl" />
                        <span className="font-bold text-xl">GreenEarth</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {['#home', '#about', '#initiatives', '#impact', '#news', '#contact'].map((link) => (
                            <a 
                                key={link} 
                                href={link} 
                                onClick={(e) => handleNavClick(e, link)}
                                className="hover:text-green-200 uppercase"
                            >
                                {link.replace('#', '')}
                            </a>
                        ))}
                    </div>
                    
                    <button 
                        className="md:hidden focus:outline-none" 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                    
                    <div className="hidden md:block">
                        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg cursor-pointer font-medium transition duration-300">
                            Donate Now
                        </button>
                    </div>
                </div>
                    
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md rounded-xl bg-green-800 text-white z-50 md:hidden">
                        <div className="flex flex-col space-y-4 p-6">
                            {['#home', '#about', '#initiatives', '#impact', '#news', '#contact'].map((link) => (
                                <a 
                                  key={link} 
                                  href={link} 
                                  onClick={(e) => handleNavClick(e, link)}
                                  className="hover:text-green-200 uppercase"
                                >
                                  {link.replace('#', '')}
                                </a>
                            ))}
                            <button 
                                onClick={() => setIsMenuOpen(false)} 
                                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition duration-300 w-1/2"
                            >
                                Donate Now
                            </button>
                        </div>
                    </div>    
                )}
            </div>
        </nav>
    );
};

export default Navigation;