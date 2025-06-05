const About = () => (
  <section id="about" className="py-16 bg-gray-100">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About GreenEarth</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2005, GreenEarth is a global non-profit organization dedicated to environmental conservation and sustainability. 
            Our team of scientists, activists, and volunteers work tirelessly to protect ecosystems, promote renewable energy, 
            and advocate for environmental policies.
          </p>
          <p className="text-gray-600 mb-6">
            We believe that every individual has the power to make a difference. Through education, community engagement, 
            and direct action, we're creating a movement for a healthier planet.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer">
            Our Story
          </button>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            {[
              '/images/about1.jpg',
              '/images/about2.jpg',
              '/images/about3.jpg',
              '/images/about4.jpg',
            ].map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden aspect-square">
                <img 
                  src={img} 
                  alt={`About ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;