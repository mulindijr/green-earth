import { FaArrowRight } from 'react-icons/fa';
import { INITIATIVES } from '../../config/data';

const Initiatives = () => (
  <section id="initiatives" className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Our Key Initiatives
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INITIATIVES.map((initiative, index) => (
          <div 
            key={index} 
            className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img 
              src={initiative.image} 
              alt={initiative.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">{initiative.title}</h3>
              <p className="text-gray-600 mb-4">{initiative.description}</p>
              <button className="text-green-600 font-medium hover:text-green-800 transition-colors cursor-pointer">
                Learn More <FaArrowRight className="ml-1 inline" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Initiatives;