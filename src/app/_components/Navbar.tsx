import React from 'react';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  onNavLinkClick: (url: string) => void; 
}

const Navbar: React.FC<NavbarProps> = ({ onNavLinkClick }) => {
  const navLinks: NavLink[] = [
    { label: 'Live TV', href: '/live-tv' },
    { label: 'News', href: '/news' },
  ];

  return (
    <nav className="bg-black fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 z-10">
      <div className="text-white text-xl font-bold">RC-TV</div>
    <ul className="flex space-x-4">
        {navLinks.map((link) => (
            <li key={link.label} className="text-white hover:text-gray-200">
                <Link legacyBehavior href={link.href}>
                    <a onClick={() => onNavLinkClick(link.href)}> 
                        {link.label}
                    </a>
                </Link>
            </li>
        ))}
    </ul>
      <img
        src="https://picsum.photos/id/1006/200/300"
        alt="Profile Picture"
        className="w-10 h-10 rounded-full ml-4"
      />
    </nav>
  );
};

export default Navbar;
