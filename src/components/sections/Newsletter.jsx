const Newsletter = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Join Our Conservation Community
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Subscribe to our newsletter for updates on our projects, volunteer opportunities, 
          and tips for living sustainably.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
            required
          />
          <button 
            type="submit" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
          >
            Subscribe
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  </section>
);

export default Newsletter;