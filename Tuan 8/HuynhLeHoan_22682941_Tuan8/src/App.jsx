import Header from './components/Header'
import RecipeSections from './components/RecipeSections'
import Footer from './components/Footer'
import './App.css'
import img1 from './assets/img1.jpg'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 w-full">
        <div className="relative w-full h-[800px] mb-16">
          {/* Hình nền to ra full */}
          <img
            src={img1}
            alt="Cooking scene"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Khung trắng đè lên */}
          <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-6 max-w-md w-full flex flex-col items-center text-center border-2 border-dashed border-yellow-400 z-10">

            {/* Tag vàng */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 px-4 py-1 text-sm font-medium text-white rounded">
              Recipe of the day
            </div>

            {/* Nội dung khung */}
            <h2 className="text-2xl font-bold text-pink-500 mb-3 mt-6">Salad Caprese</h2>
            <p className="text-gray-600 mb-4">
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.pravatar.cc/40"
                alt="Chef avatar"
                className="w-10 h-10 rounded-full border-2 border-pink-400"
              />
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

        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <RecipeSections />
        </div>
      </main>
      <Footer />
    </div>
  )
}


export default App
