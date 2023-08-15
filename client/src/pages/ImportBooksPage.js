import React, { useState } from 'react';
import axios from 'axios';

const ImportBooksPage = () => {
  const [bookName, setBookName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleImport = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/import-books/', {
        title: bookName,
        num_books: quantity,
      });
      console.log('Books imported:', response.data);
      // Reset form
      setBookName('');
      setQuantity('');
    } catch (error) {
      console.error('Error importing books:', error);
    }
  };

  return (
    <div className="bg-orange-200 rounded-lg shadow-md p-6 m-10 20">
      <h2 className="text-2xl font-semibold mb-4 text-center">Import Books</h2>
      <form className="space-y-4">
        <div className="flex items-center space-x-4">
          <label className="text-lg w-1/3">Book Name:</label>
          <input
            type="text"
            className="border rounded w-full p-2"
            value={bookName}
            onChange={e => setBookName(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="text-lg w-1/3">Quantity:</label>
          <input
            type="number"
            className="border rounded w-full p-2"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-900 hover:font-bold"
            onClick={handleImport}
          >
            Import
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImportBooksPage;
