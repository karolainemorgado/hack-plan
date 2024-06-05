// src/components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" legacyBehavior>
        <a className="text-white text-xl font-bold">Meu Projeto</a>
      </Link>
      <div>
        <Link href="/about" legacyBehavior>
          <a className="text-white px-4">Sobre</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="text-white px-4">Contato</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
