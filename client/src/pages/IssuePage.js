import React from 'react';
import BookForm from '../components/BookForm';

const IssuePage = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Issue Book</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <BookForm />
      </div>
    </div>
  );
};

export default IssuePage;
