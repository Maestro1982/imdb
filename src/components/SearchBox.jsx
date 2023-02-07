'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    // Prevents the page from refreshing
    e.preventDefault();
    if (!searchInput) return;
    router.push(`/search/${searchInput}`);
  }

  return (
    <form
      className='flex max-w-6xl mx-auto justify-between items-center px-5'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search keywords...'
        className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        type='submit'
        className='text-amber-600 disabled:text-gray-400 border border-amber-500 p-1 rounded-md'
        disabled={!searchInput}
      >
        Search
      </button>
    </form>
  );
}
