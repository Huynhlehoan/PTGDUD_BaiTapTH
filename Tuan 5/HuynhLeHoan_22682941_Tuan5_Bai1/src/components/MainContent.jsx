import React, { useEffect, useState } from "react";
import "../styles/Recipe.css";


const MainContent = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://67c83e650acf98d0708594ce.mockapi.io/v1/api/posts/posts")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  return (
    <main className="flex-grow p-4 recipe-box">
     
      <div className="flex items-center justify-between gap-4">
  <h2 className="text-xl font-bold">Salad(32)</h2>
  <select className="p-2 border rounded-md">
    <option value="">A-Z</option>
    <option value="">Z-A</option>
  </select>

  </div>
 
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.avatar} alt={recipe.name} />
            <h3>{recipe.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;