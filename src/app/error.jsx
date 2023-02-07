'use client';
import React, { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className='text-center mt-10'>
      <h1>Something went wrong</h1>
      <button
        type='button'
        className='hover:text-amber-600 p-1 border border-amber-500 mt-1 rounded-md'
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
