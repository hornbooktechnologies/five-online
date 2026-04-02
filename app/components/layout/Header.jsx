'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from "@/app/components/common/Button";
import {
  ChevronDownIcon,
  PhoneIcon,
} from "@/app/components/icons";

const MOBILE_MENU_ITEMS = [
  {
    id: 'capabilities',
    label: 'Capabilities',
    items: [
      { label: 'New Business Website Launch', href: '#' },
      { label: 'Corporate Website Revamp', href: '#' },
      { label: 'D2C Ecommerce Launch', href: '#' },
      { label: 'Conversion & CRO Audit', href: '#' },
      { label: 'Website Maintenance & Performance', href: '#' },
      { label: 'Get Found in AI Search', href: '#' },
    ]
  },
  {
    id: 'industries',
    label: 'Industries',
    items: [
      {
        id: 'industries_b2b',
        label: 'B2B',
        items: [
          { label: 'Corporate', href: '#' },
          { label: 'Real Estate', href: '#' }
        ]
      },
      {
        id: 'industries_ecommerce',
        label: 'eCommerce',
        items: [
          { label: 'Fashion', href: '#' }
        ]
      }
    ]
  },
  {
    id: 'impact',
    label: 'Impact',
    items: [
      { label: 'Case Study', href: '/case-studies' },
      { label: 'Portfolio', href: '/portfolio' }
    ]
  },
  {
    id: 'insights',
    label: 'Insights',
    items: [
      { label: 'Blogs', href: '#' }
    ]
  },
  {
    id: 'about',
    label: 'About',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Career', href: '#' }
    ]
  }
];

// Helper to recursively find a menu by ID
const findMenuById = (items, id) => {
  if (id === 'main') return { id: 'main', items: MOBILE_MENU_ITEMS };
  for (const item of items) {
    if (item.id === id) return item;
    if (item.items) {
      const found = findMenuById(item.items, id);
      if (found) return found;
    }
  }
  return null;
};

export default function Header() {
  const pathname = usePathname() || '';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeStacks, setActiveStacks] = useState(['main']);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setActiveStacks(['main']); // reset on close
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => setActiveStacks(['main']), 400); // reset after animation
  };

  const pushStack = (menuId) => setActiveStacks([...activeStacks, menuId]);
  const popStack = () => setActiveStacks(activeStacks.slice(0, -1));

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Recursively render mobile menus
  const renderMobileMenuLayer = (menuId, layerIndex) => {
    const menu = findMenuById(MOBILE_MENU_ITEMS, menuId);
    if (!menu) return null;

    const isActive = activeStacks[activeStacks.length - 1] === menuId;
    const isPast = activeStacks.indexOf(menuId) < activeStacks.length - 1;
    const positionClass = isActive ? 'translate-x-0' : (isPast ? '-translate-x-full' : 'translate-x-[110%]');

    return (
      <div
        key={menuId}
        className={`absolute top-0 left-0 w-full h-full bg-[#f5fff0] transition-transform duration-400 ease-in-out ${positionClass} z-[${100 + layerIndex}]`}
      >
        <div className="flex justify-between items-center !px-[15px] !py-[20px]">
          <button className="w-[35px] h-[35px] rounded-full bg-[#e5e5e5] shadow-sm flex items-center justify-center text-black font-black" onClick={closeMobileMenu}>
            <i className="fas fa-times"></i>
          </button>
          {menuId !== 'main' && (
            <button className="text-black font-semibold text-base" onClick={popStack}>← Back</button>
          )}
        </div>
        <ul className="m-0 p-0 list-none text-black">
          {menu.items.map((item, idx) => (
            <li key={idx} className="border-b border-[#eee]">
              {item.items ? (
                <button
                  className="w-full flex justify-between items-center px-[15px] py-[20px] text-left font-body text-base text-[16px] hover:text-[#6ABD45] transition-colors"
                  onClick={() => pushStack(item.id)}
                >
                  {item.label} <i className="fas fa-chevron-right text-xs text-black !font-black w-5 h-5 flex items-center justify-center"></i>
                </button>
              ) : (
                <Link href={item.href || '#'} className="block px-[15px] py-[20px] font-body text-base text-[16px] hover:text-[#6ABD45] transition-colors" onClick={closeMobileMenu}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          {menuId === 'main' && (
            <>
              <li className="border-b border-black/10"><Link href="/contact" className="block p-4 font-body text-base hover:text-[#6ABD45] transition-colors" onClick={closeMobileMenu}>Contact Us</Link></li>
              <li className="border-b border-black/10"><Link href="#" className="block p-4 font-body text-base hover:text-[#6ABD45] transition-colors" onClick={closeMobileMenu}>Terms & Conditions</Link></li>
            </>
          )}
        </ul>
      </div>
    );
  };

  return (
    <header className="px-0 relative z-[9999]">
      {/* DESKTOP HEADER SECTION START */}
      <section className="hidden lg:block p-0 fixed top-0 left-0 w-full z-[9999] bg-white border-b border-gray-100">
        <div className="w-full">
          <div className="flex flex-row">
            <nav className="flex items-center w-full px-4 relative">
              <div className="w-full flex justify-between items-center">
                <Link href="/" className="mr-4 py-1">
                  <Image src="/images/fiveonline-logo.png" width={180} height={40} alt="Five Online Web Solutions Pvt Ltd" className="h-auto w-[250px]" />
                </Link>

                <div className="flex-grow flex items-center justify-end">
                  <ul className="flex flex-row items-center ms-auto my-0 space-x-1 lg:space-x-2 xl:space-x-4 px-2 py-0.5">
                    {/* Capabilities */}
                    <li className="relative py-3 lg:py-[30px] px-2 group cursor-pointer">
                      <a className={`flex items-center gap-2 font-body text-[17px] capitalize transition-colors whitespace-nowrap group-hover:text-[#6ABD45] ${pathname.startsWith('/capabilities') ? 'text-[#6ABD45]' : 'text-black'}`} role="button">
                        Capabilities <ChevronDownIcon />
                      </a>
                      <ul className="absolute hidden group-hover:block bg-white top-[95%] -left-4 min-w-[280px] rounded-lg py-2 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#0000002d] z-50">
                        <li><Link href="#" className="block px-6 py-2.5 text-[15px] font-body text-black hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">New Business Website Launch</Link></li>
                        <li><Link href="#" className="block px-6 py-2.5 text-[15px] font-body text-black hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">Corporate Website Revamp</Link></li>
                        <li><Link href="#" className="block px-6 py-2.5 text-[15px] font-body text-black hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">D2C Ecommerce Launch</Link></li>
                        <li><Link href="#" className="block px-6 py-2.5 text-[15px] font-body text-black hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">Conversion & CRO Audit</Link></li>
                        <li><Link href="#" className="block px-6 py-2.5 text-[15px] font-body text-black hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">Website Maintenance & Performance</Link></li>
                        <li><Link href="#" className="block px-6 py-2.5 text-[15px] font-body text-black hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">Get Found in AI Search</Link></li>
                      </ul>
                    </li>

                    {/* Industries (Mega Menu) */}
                    <li className="relative py-3 lg:py-[30px] px-2 group cursor-pointer static">
                      <a className={`flex items-center gap-2 font-body text-[17px] capitalize transition-colors whitespace-nowrap group-hover:text-[#6ABD45] ${pathname.startsWith('/industrie') ? 'text-[#6ABD45]' : 'text-black'}`} role="button">
                        Industries <ChevronDownIcon />
                      </a>
                      <div className="absolute hidden group-hover:block left-0 w-full top-full bg-white border-t-[3px] border-t-black border border-[#0000002d] pt-10 pb-10 px-0 z-[999] shadow-[0_15px_30px_rgba(0,0,0,0.06)]">
                        <div className="container mx-auto px-4 xl:px-[90px]">
                          <div className="flex flex-wrap -mx-3">
                            <div className="w-1/4 px-4 border-r border-gray-100">
                              <h6 className="font-body text-xl font-bold mb-4 text-black">B2B</h6>
                              <Link href="#" className="block py-2 text-black font-body text-base hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">Corporate</Link>
                              <Link href="#" className="block py-2 text-black font-body text-base hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">Real Estate</Link>
                            </div>
                            <div className="w-1/4 px-8">
                              <h6 className="font-body text-xl font-bold mb-4 text-black">eCommerce</h6>
                              <Link href="#" className="block py-2 text-black font-body text-base hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">Fashion</Link>
                            </div>
                            <div className="w-2/4 px-4 flex justify-end">
                              <Image src="/images/nav-img.png" width={450} height={250} className="rounded-xl shadow-sm h-auto" alt="Nav image" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Impact */}
                    <li className="relative py-3 lg:py-[30px] px-2 group cursor-pointer">
                      <a className={`flex items-center gap-2 font-body text-[17px] capitalize transition-colors whitespace-nowrap group-hover:text-[#6ABD45] ${pathname.startsWith('/case-studies') || pathname.startsWith('/portfolio') ? 'text-[#6ABD45]' : 'text-black'}`} role="button">
                        Impact <ChevronDownIcon />
                      </a>
                      <ul className="absolute hidden group-hover:block bg-white top-[95%] -left-4 min-w-[200px] rounded-lg py-2 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#0000002d] z-50">
                        <li><Link href="/case-studies" className="block px-6 py-2.5 text-[15px] font-body text-black hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">Case Study</Link></li>
                        <li><Link href="/portfolio" className="block px-6 py-2.5 text-[15px] font-body text-black hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">Portfolio</Link></li>
                      </ul>
                    </li>

                    {/* Insights */}
                    <li className="relative py-3 lg:py-[30px] px-2 group cursor-pointer">
                      <a className={`flex items-center gap-2 font-body text-[17px] capitalize transition-colors whitespace-nowrap group-hover:text-[#6ABD45] ${pathname.startsWith('/blog') || pathname.startsWith('/insight') ? 'text-[#6ABD45]' : 'text-black'}`} role="button">
                        Insights <ChevronDownIcon />
                      </a>
                      <ul className="absolute hidden group-hover:block bg-white top-[95%] -left-4 min-w-[200px] rounded-lg py-2 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#0000002d] z-50">
                        <li><Link href="#" className="block px-6 py-2.5 text-[15px] font-body text-black hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">Blog</Link></li>
                      </ul>
                    </li>

                    {/* About */}
                    <li className="relative py-3 lg:py-[30px] px-2 group cursor-pointer">
                      <a className={`flex items-center gap-2 font-body text-[17px] capitalize transition-colors whitespace-nowrap group-hover:text-[#6ABD45] ${pathname.startsWith('/about') || pathname.startsWith('/career') ? 'text-[#6ABD45]' : 'text-black'}`} role="button">
                        About <ChevronDownIcon />
                      </a>
                      <ul className="absolute hidden group-hover:block bg-white top-[95%] -left-4 min-w-[200px] rounded-lg py-2 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#0000002d] z-50">
                        <li><Link href="/about" className="block px-6 py-2.5 text-[15px] font-body text-black hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">About Us</Link></li>
                        <li><Link href="#" className="block px-6 py-2.5 text-[15px] font-body text-black hover:bg-[#f5f5f5] hover:text-[#6ABD45] transition-colors">Career</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <Button href="/contact" variant="primary" size="lg">
                  <PhoneIcon />
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </section>
      {/* DESKTOP HEADER SECTION CLOSE */}

      {/* MOBILE HEADER SECTION START */}
      <section className="lg:hidden block fixed top-0 w-full z-[9999] bg-white border-b border-gray-100 left-0">
        <div className="w-full px-4 py-3">
          <div className="flex flex-row items-center justify-between">
            <div className="w-1/2">
              <Link href="/">
                <Image src="/images/fiveonline-logo.png" width={140} height={40} alt="Five Online" className="w-[140px] h-auto" />
              </Link>
            </div>

            <div className="w-1/2 flex justify-end">
              <div
                className="cursor-pointer flex flex-col justify-center items-end"
                onClick={toggleMobileMenu}
                style={{ width: '35px', padding: '5px 0' }}
              >
                <span className="bg-black rounded-full block mb-1.5 transition-all duration-300" style={{ width: '32px', height: '2.5px' }}></span>
                <span className="bg-black rounded-full block mb-1.5 transition-all duration-300" style={{ width: '32px', height: '2.5px' }}></span>
                <span className="bg-black rounded-full block mb-1.5 transition-all duration-300" style={{ width: '32px', height: '2.5px' }}></span>
                <span className="bg-black rounded-full block transition-all duration-300" style={{ width: '32px', height: '2.5px' }}></span>
              </div>
            </div>

            {/* Mobile Nav Drawer */}
            <div
              className="fixed top-0 right-0 h-full bg-[#f5fff0] z-[10000] overflow-hidden transition-all duration-400 ease-in-out"
              style={{ width: isMobileMenuOpen ? '100%' : '0px' }}
            >
              <div className="relative w-full h-full overflow-hidden">
                {activeStacks.map((menuId, index) => renderMobileMenuLayer(menuId, index))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MOBILE HEADER SECTION CLOSE */}
    </header>
  );
}
