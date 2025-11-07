import React from 'react';
import { UserCircle, Plus, Search } from 'lucide-react';

const Header = ({ query, onQueryChange }) => (
  <header className="bg-red-700 text-white p-4 flex items-center justify-between shadow-lg">
    {/* Logo */}
    <div className="flex items-center">
      <div className="bg-white text-red-700 w-16 h-16 flex items-center justify-center rounded-lg">
        <span className="text-4xl font-extrabold tracking-tighter">N</span>
        <span className="text-4xl font-extrabold tracking-tighter -ml-1.5">HE</span>
      </div>
    </div>

    {/* Search Bar */}
    <div className="flex-1 max-w-lg mx-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={18} />
        <input
          className="w-full pl-10 pr-4 py-2 rounded-lg text-black"
          type="text"
          placeholder="Search events…"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          aria-label="Search events"
        />
      </div>
    </div>

    {/* Actions */}
    <div className="flex items-center gap-4">
      <button className="flex items-center gap-2 bg-white text-gray-900 font-semibold py-2 px-5 rounded-full shadow-md hover:bg-gray-200 transition-colors">
        <Plus size={20} />
        <span>Create Event</span>
      </button>
      <button className="text-white hover:bg-red-800 rounded-full p-2">
        <UserCircle size={32} />
      </button>
    </div>
  </header>
);

export default Header;

