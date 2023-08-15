import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedMember, setSelectedMember] = useState('');
  const [members, setMembers] = useState([]);
  const [isIssuingModalOpen, setIsIssuingModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResultsMessage, setNoResultsMessage] = useState('');


  useEffect(() => {
    fetchBooks();
    fetchMembers();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/books/');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/members/');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const openIssuingModal = (book) => {
    setSelectedBook(book);
    setSelectedMember('');
    setIsIssuingModalOpen(true);
  };

  const closeIssuingModal = () => {
    setSelectedBook(null);
    setSelectedMember('');
    setIsIssuingModalOpen(false);
  };

  const handleIssuing = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/issue-book/', {
        book: selectedBook.id,
        member: selectedMember,
        issue_date: new Date().toISOString().split('T')[0],
      });
      closeIssuingModal();
      fetchBooks(); // Refresh book list
    } catch (error) {
      console.error('Error issuing book:', error);
    }
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/books/${bookId}/`);
      fetchBooks(); // Refresh book list
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      fetchBooks(); // Reset the list if the search query is empty
      setNoResultsMessage('');
    } else {
      const filteredBooks = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.authors.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredBooks.length === 0) {
        setNoResultsMessage('No matching books found.');
      } else {
        setNoResultsMessage('');
      }

      setBooks(filteredBooks);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="p-4">
      {/* Retro-styled Search Bar */}
      <div className="p-4 bg-yellow-200 rounded-lg mb-6">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by title or author"
            className="border rounded p-2 w-full bg-yellow-100"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 ml-2 hover:font-bold"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {noResultsMessage && (
          <p className="text-red-600 mt-2">{noResultsMessage}</p>
        )}
      </div>

      {/* Retro-styled Book Cards */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        {books.map(book => (
          <div key={book.id} className="bg-orange-200 p-4 rounded-lg shadow-md mb-4 flex">
            <div className="w-3/4 pr-4">
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-700">Author: {book.authors}</p>
              <p className="text-gray-700">ISBN: {book.isbn}</p>
              <p className="text-gray-700">Avg. Rating: {book.average_rating}</p>
            </div>
            <div className="w-1/4 flex flex-col justify-between">
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 mt-2 hover:font-bold"
                onClick={() => openIssuingModal(book)}
              >
                Issue Book
              </button>
              <button
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800 mt-2 hover:font-bold"
                onClick={() => handleDeleteBook(book.id)}
              >
                Delete Book
              </button>
            </div>
          </div>
        ))}
      </div>


      {/* Retro-styled Issuing Modal */}
      {isIssuingModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-orange-200 p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold mb-4 text-center">Issue/Edit Book</h2>
          <label className="block mb-2">
            Member:
            <select
              className="border rounded w-full p-2"
              value={selectedMember}
              onChange={e => setSelectedMember(e.target.value)}
            >
              <option value="">Select a member</option>
              {members.map(member => (
                <option key={member.id} value={member.id}>{member.name}</option>
              ))}
            </select>
          </label>
          <div className="flex justify-end mt-4">
            <button
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 mr-2"
              onClick={handleIssuing}
              disabled={!selectedMember}
            >
              Save
            </button>
            <button
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-600 hover:text-white"
              onClick={closeIssuingModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      
      )}
    </div>
  );
};

export default BookList;
