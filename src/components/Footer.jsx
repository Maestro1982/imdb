import React from 'react';

export default function Footer() {
  const date = new Date();
  return (
    <div className='max-w-6xl mx-auto mt-1 text-center'>
      <p>
        <span className='items-center text-amber-500'>
          IMDb Clone &copy;{date.getFullYear()}
        </span>
      </p>
    </div>
  );
}
