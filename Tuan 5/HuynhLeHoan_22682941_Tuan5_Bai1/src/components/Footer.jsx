import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between">
        {/* About Us Section */}
        <div className="w-1/3">
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <p className="text-sm mb-3">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <input
            type="text"
            className="w-full p-2 rounded-md border border-gray-300 text-white"
            placeholder="Enter your email"
          />
      <button className="mt-2 bg-pink-500 text-black send-btn">
  Send
</button>

        </div>

        {/* Learn More Section */}
        <div className="w-1/4">
          <h4 className="text-lg font-semibold mb-2">Learn More</h4>
          <ul>
            <li><a href="#" className="hover:text-pink-400 transition">Our Cooks</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">See Our Features</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">FAQ</a></li>
          </ul>
        </div>

        {/* Recipes Section */}
        <div className="w-1/4">
          <h4 className="text-lg font-semibold mb-2">Recipes</h4>
          <ul>
            <li><a href="#" className="hover:text-pink-400 transition">What to Cook This Week</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Pasta</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Dinner</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Vegetarian</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-right text-sm mt-6 border-t border-gray-600 pt-4">
        © 2023 Cheffy Company - <a href="#" className="hover:text-pink-400 transition">Terms of Service</a> | <a href="#" className="hover:text-pink-400 transition">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
