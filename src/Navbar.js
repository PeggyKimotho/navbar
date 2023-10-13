import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white font-bold text-lg py-6 shadow-md">
      <ul className="flex justify-center items-center list-none m-0 p-0">
        <li className="mx-2">
          <a>Home</a>
        </li>
        <li className="mx-2">
          <a>About</a>
        </li>
        <li className="mx-2 relative group">
          <a>A</a>
          <ul className="absolute hidden group-hover:block mt-2 space-y-2 bg-blue-200">
            <li><a>1</a></li>
            <li><a>2</a></li>
            <li><a>3</a></li>
          </ul>
        </li>
        <li className="mx-2 relative group">
          <a>B</a>
          <ul className="absolute hidden group-hover:block mt-2 space-y-2 bg-blue-200">
            <li><a>1</a></li>
            <li><a>2</a></li>
            <li><a>3</a></li>
          </ul>
        </li>
        <li className="mx-2 relative group">
          <a>C</a>
          <ul className="absolute hidden group-hover:block mt-2 space-y-2 bg-blue-200">
            <li><a>1</a></li>
            <li><a>2</a></li>
            <li><a>3</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
