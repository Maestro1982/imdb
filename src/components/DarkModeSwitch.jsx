'use client';
import React, { useEffect, useState } from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
      {isMounted &&
        (currentTheme === 'dark' ? (
          <MdOutlineLightMode
            className='text-xl cursor-pointer hover:text-amber-500'
            onClick={() => setTheme('light')}
          />
        ) : (
          <MdOutlineDarkMode
            className='text-xl cursor-pointer hover:text-amber-500'
            onClick={() => setTheme('dark')}
          />
        ))}
    </>
  );
}
