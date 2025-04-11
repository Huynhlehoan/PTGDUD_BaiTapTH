function Footer() {
    return (
      <footer className="bg-gray-900 text-white w-full mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-24 gap-y-8">
            {/* About Us Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400 mb-6">Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-lg bg-white text-gray-900"
                />
                <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
                  Send
                </button>
              </div>
            </div>
  
            {/* Learn More Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Learn More</h3>
              <ul className="space-y-3">
                <li><a href="/our-cooks" className="text-gray-400 hover:text-white">Our Cooks</a></li>
                <li><a href="/features" className="text-gray-400 hover:text-white">See Our Features</a></li>
                <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
              <h3 className="text-xl font-semibold mt-8 mb-4">Shop</h3>
              <ul className="space-y-3">
                <li><a href="/subscription" className="text-gray-400 hover:text-white">Gift Subscription</a></li>
                <li><a href="/feedback" className="text-gray-400 hover:text-white">Send Us Feedback</a></li>
              </ul>
            </div>
  
            {/* Recipes Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Recipes</h3>
              <ul className="space-y-3">
                <li><a href="/this-week" className="text-gray-400 hover:text-white">What to Cook This Week</a></li>
                <li><a href="/pasta" className="text-gray-400 hover:text-white">Pasta</a></li>
                <li><a href="/dinner" className="text-gray-400 hover:text-white">Dinner</a></li>
                <li><a href="/healthy" className="text-gray-400 hover:text-white">Healthy</a></li>
                <li><a href="/vegetarian" className="text-gray-400 hover:text-white">Vegetarian</a></li>
                <li><a href="/vegan" className="text-gray-400 hover:text-white">Vegan</a></li>
                <li><a href="/christmas" className="text-gray-400 hover:text-white">Christmas</a></li>
              </ul>
            </div>
          </div>
  
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row gap-4">
            <div className="flex items-center">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="ml-2 text-2xl font-bold">Chefify</span>
            </div>
            <div className="text-gray-400 text-sm">
              <span>2023 Chefify Company</span>
              <span className="mx-2">|</span>
              <a href="/terms" className="hover:text-white">Terms of Service</a>
              <span className="mx-2">|</span>
              <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer