import { FaArrowRight } from 'react-icons/fa';
import { NEWS } from '../../config/data';

const News = () => (
  <section id="news" className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Latest News & Updates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NEWS.map((item, index) => (
          <div 
            key={index} 
            className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <div className="text-sm text-green-600 mb-2">{item.date}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <button className="text-green-600 font-medium hover:text-green-800 transition-colors cursor-pointer">
                Read More <FaArrowRight className="ml-1 inline" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer">
          View All News
        </button>
      </div>
    </div>
  </section>
);

export default News;