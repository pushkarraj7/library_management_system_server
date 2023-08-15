import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="h-auto bg-gradient-to-r from-yellow-300 to-orange-400 py-16">
        <div className="relative flex items-center justify-center">
          <div className="container mx-auto px-32 flex justify-between items-center z-10">
            <div className="text-center">
              <h2 className="text-4xl font-semibold text-white mb-4">Welcome to Your Library!!!</h2>
              <p className="text-white text-xl mb-6">
                Discover our enormous variety of books and effortlessly customize your reading preferences.
              </p>
              <Link to="/books">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:font-bold">
                  Search Book
                </button>
              </Link>
            </div>
            <div className="flex-shrink-0 ml-12">
              {/* Replace the src attribute with the actual image path */}
              <img src="bg.jpg" alt="" className="w-auto h-auto rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-red-500 text-white p-10 font-bold">
        <div className="container mx-auto text-center">
          <p>&copy; 2023. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;