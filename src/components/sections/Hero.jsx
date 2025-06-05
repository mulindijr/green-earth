import { FaArrowRight } from 'react-icons/fa';
import { smoothScroll } from '../../utils/scroll';

const Hero = () => (
  <section 
    id="home" 
    className="h-[60vh] md:h-[100vh] bg-center bg-cover flex items-center justify-center text-white"
    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/hero.jpg')` }}
  >
    <div className="text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Protecting Our Planet Together
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Join us in our mission to conserve nature and reduce the human impact on the environment for a sustainable future.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button 
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium text-lg transition-colors cursor-pointer"
          onClick={() => smoothScroll('#initiatives')}
        >
          Get Involved
        </button>
        <button 
          className="bg-white text-green-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-lg transition-colors cursor-pointer"
          onClick={() => smoothScroll('#about')}
        >
          Learn More <FaArrowRight className="inline ml-2" />
        </button>
      </div>
    </div>
  </section>
);

export default Hero;