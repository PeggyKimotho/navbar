import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white font-bold text-lg py-6 shadow-md">
      <ul className="flex justify-center items-center list-none m-0 p-0">
        <li className="mx-2">
          <a href="/">Home</a>
        </li>
        <li className="mx-2">
          <a href="/about">About</a>
        </li>
        <li className="mx-2 relative group">
          <a href="#">A</a>
          <ul className="absolute hidden group-hover:block mt-2 space-y-2 bg-gray-200">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </li>
        <li className="mx-2 relative group">
          <a href="#">B</a>
          <ul className="absolute hidden group-hover:block mt-2 space-y-2 bg-gray-200">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </li>
        <li className="mx-2 relative group">
          <a href="#">C</a>
          <ul className="absolute hidden group-hover:block mt-2 space-y-2 bg-gray-200">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;