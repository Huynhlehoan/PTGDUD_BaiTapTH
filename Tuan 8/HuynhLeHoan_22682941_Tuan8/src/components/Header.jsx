import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <svg className="h-8 w-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="ml-2 text-2xl font-bold text-pink-500">Chefify</span>
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="What would you like to cook?"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <a href="/what-to-cook" className="text-gray-600 hover:text-gray-900">What to cook</a>
            <a href="/recipes" className="text-gray-600 hover:text-gray-900">Recipes</a>
            <a href="/ingredients" className="text-gray-600 hover:text-gray-900">Ingredients</a>
            <a href="/occasions" className="text-gray-600 hover:text-gray-900">Occasions</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a>
            <a href="/login" className="text-pink-500 hover:text-pink-600">Login</a>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
              Subscribe
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header