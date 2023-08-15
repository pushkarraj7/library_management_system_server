import React from 'react';
import BookList from '../components/BookList';

const BooksPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Book List</h2>
          <BookList />
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
