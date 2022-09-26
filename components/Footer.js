import React from 'react';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] p-7 text-gray-600 text-sm">
      CopyRight &copy;{new Date().getFullYear()} Yousof Wahba
    </footer>
  );
}
