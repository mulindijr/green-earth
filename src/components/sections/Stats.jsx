import { FaTree, FaWater, FaPaw } from 'react-icons/fa';
import { STATS } from '../../config/data';

const Stats = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Our Conservation Impact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STATS.map((stat, index) => (
          <div 
            key={index} 
            className="bg-green-50 p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-xl"
          >
            <div className="text-green-600 text-5xl mb-4">
              {stat.icon === 'tree' && <FaTree />}
              {stat.icon === 'water' && <FaWater />}
              {stat.icon === 'paw' && <FaPaw />}
            </div>
            <h3 className="text-4xl font-bold text-green-800 mb-2">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;