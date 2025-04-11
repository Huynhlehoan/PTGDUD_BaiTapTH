import { useState, useEffect } from 'react'

function RecipeSections() {
  const [summerRecipes, setSummerRecipes] = useState([])
  const [videoRecipes, setVideoRecipes] = useState([])
  const [editorsPicks, setEditorsPicks] = useState([])

  useEffect(() => {
    // Mock API data - in a real app, this would be an API call
    const fetchRecipes = () => {
      setSummerRecipes([
        {
          id: 1,
          title: 'Italian-style tomato',
          image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          duration: '20 mins'
        },
        {
          id: 2,
          title: 'Spaghetti with vegetables',
          image: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          duration: '25 mins'
        },
        {
          id: 3,
          title: 'Lotus delight salad',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          duration: '15 mins'
        },
        {
          id: 4,
          title: 'Snack cakes',
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          duration: '30 mins'
        },
      ])

      setVideoRecipes([
        {
          id: 1,
          title: 'Salad with cabbage and shrimp',
          image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          duration: '20 mins'
        },
        {
          id: 2,
          title: 'Salad of corn beans, shrimp and potatoes',
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          duration: '35 mins'
        },
        {
          id: 3,
          title: 'Sunny-side up fried egg',
          image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          duration: '10 mins'
        },
        {
          id: 4,
          title: 'Lotus delight salad',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          duration: '25 mins'
        },
      ])

      setEditorsPicks([
        {
          id: 1,
          title: 'Stuffed sticky rice ball',
          image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          author: {
            name: 'Jennifer King',
            avatar: 'https://i.pravatar.cc/100?img=1'
          },
          description: 'Delicious rice balls stuffed with meat and shrimp, garnished with a flavorful filling.'
        },
        {
          id: 2,
          title: 'Strawberry smoothie',
          image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          author: {
            name: 'Matthew Martinez',
            avatar: 'https://i.pravatar.cc/100?img=2'
          },
          description: 'Sweet and refreshing delight of strawberry smoothie. Made with fresh strawberries and creamy yogurt.'
        },
        {
          id: 3,
          title: 'Latte Art',
          image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          author: {
            name: 'Sarah Hill',
            avatar: 'https://i.pravatar.cc/100?img=3'
          },
          description: 'Latte art is the barista craft of creating captivating designs on the surface of a latte.'
        },
        {
          id: 4,
          title: 'Butter fried noodles',
          image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          author: {
            name: 'Julia Lopez',
            avatar: 'https://i.pravatar.cc/100?img=4'
          },
          description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal.'
        },
      ])
    }

    fetchRecipes()
  }, [])

  return (
    <div className="space-y-16">
      {/* Summer Recipes Section */}
      <section>
        <h2 className="text-2xl font-bold mb-2">This Summer Recipes</h2>
        <p className="text-gray-600 mb-8">We have all your Independence Day sweets covered</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {summerRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{recipe.title}</h3>
                <p className="text-pink-500 text-sm">{recipe.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recipes With Videos Section */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Recipes With Videos</h2>
        <p className="text-gray-600 mb-8">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {videoRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{recipe.title}</h3>
                <p className="text-pink-500 text-sm">{recipe.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editor's Pick Section */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Editor's pick</h2>
        <p className="text-gray-600 mb-8">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {editorsPicks.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
              <img src={recipe.image} alt={recipe.title} className="w-1/3 object-cover" />
              <div className="p-4 flex-1">
                <h3 className="font-medium text-gray-900 mb-2">{recipe.title}</h3>
                <div className="flex mb-2">
                  <img src={recipe.author.avatar} alt={recipe.author.name} className="w-8 h-8 rounded-full mr-2" />
                  <span className="text-sm text-gray-600">{recipe.author.name}</span>
                </div>
                <p className="text-gray-600 text-sm">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default RecipeSections