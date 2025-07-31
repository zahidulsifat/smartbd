'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMenu = () => {
    setIsMenuOpen(true);
  };

  const hideMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <Link href="/">
        <Image src="/logo.png" alt="Smart Technologies Logo" width={150} height={50} />
      </Link>
      <div 
        className={`nav-links ${isMenuOpen ? 'right-0' : ''}`} 
        id="navLinks"
        style={{ right: isMenuOpen ? '0' : '-200px' }}
      >
        <i className="fa fa-times" onClick={hideMenu}></i>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/products">PRODUCT PORTFOLIO</Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <i className="fa fa-bars" onClick={showMenu}></i>
    </nav>
  );
}
