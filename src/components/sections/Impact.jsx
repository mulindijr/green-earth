import { FaGlobeAmericas, FaUsers, FaGraduationCap, FaHandHoldingHeart } from 'react-icons/fa';
import { IMPACT_ITEMS } from '../../config/data';

const Impact = () => (
  <section id="impact" className="py-16 bg-green-800 text-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Making a Difference</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {IMPACT_ITEMS.map((item, index) => (
          <div 
            key={index} 
            className="bg-green-700 p-6 rounded-lg text-center transition-all duration-300 hover:scale-105"
          >
            <div className='flex items-center gap-4'>
              <div className="text-4xl mb-4">
                {item.icon === 'globe-americas' && <FaGlobeAmericas />}
                {item.icon === 'users' && <FaUsers />}
                {item.icon === 'graduation-cap' && <FaGraduationCap />}
                {item.icon === 'hand-holding-heart' && <FaHandHoldingHeart />}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Impact;