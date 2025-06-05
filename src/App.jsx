import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Initiatives from './components/sections/Initiatives';
import Impact from './components/sections/Impact';
import News from './components/sections/News';
import Newsletter from './components/sections/Newsletter';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import BackToTop from './components/ui/BackToTop';
import { useScroll } from './hooks/useScroll';

function App() {
  const showBackToTop = useScroll(300);
  
  return (
    <div className="font-sans bg-gray-50">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Initiatives />
        <Impact />
        <News />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <BackToTop visible={showBackToTop} />
    </div>
  );
}

export default App;