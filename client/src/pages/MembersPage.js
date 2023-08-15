import React from 'react';
import MemberList from '../components/MemberList';

const MembersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Member List</h2>
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <MemberList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
