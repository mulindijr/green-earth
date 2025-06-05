import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { CONTACT_INFO } from '../../config/data';

const Contact = () => (
  <section id="contact" className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Get In Touch
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
          <div className="space-y-4">
            {CONTACT_INFO.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="text-green-600 text-xl mr-4 mt-1">
                  {info.icon === 'map-marker-alt' && <FaMapMarkerAlt />}
                  {info.icon === 'phone-alt' && <FaPhoneAlt />}
                  {info.icon === 'envelope' && <FaEnvelope />}
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{info.title}</h4>
                  <p className="text-gray-600">{info.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-600 hover:text-green-800 text-2xl transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-green-600 hover:text-green-800 text-2xl transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-green-600 hover:text-green-800 text-2xl transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-green-600 hover:text-green-800 text-2xl transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="text-green-600 hover:text-green-800 text-2xl transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  required 
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;