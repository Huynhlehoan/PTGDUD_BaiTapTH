import Header from './components/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md">
            <div className="absolute -top-3 left-6 bg-yellow-400 px-4 py-1 rounded-full text-sm font-medium">
              Recipe of the day
            </div>
            
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-pink-500 mb-3">Salad Caprese</h2>
              <p className="text-gray-600 mb-4">
                Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
              </p>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm">👩‍🍳</span>
                </div>
                <span className="text-sm text-gray-600">Salad Caprese</span>
              </div>
              
              <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 flex items-center gap-2">
                View now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-3/5 h-full">
            <img 
              src="https://images.unsplash.com/photo-1590006008576-c00e0a0ca2d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="Cooking scene" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default App