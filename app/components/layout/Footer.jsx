"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "../common/Container";
import { ChevronDownIcon } from "../icons";

// Figma: service links with #6abd45 green dot separators, Poppins 400 14px
const serviceLinks = [
  { label: "Web Design Company in Mumbai", href: "#" },
  { label: "Ecommerce Website Development", href: "#" },
  { label: "Shopify Developers in India", href: "#" },
  { label: "Corporate Website Design", href: "#" },
  { label: "Website Redesign Services", href: "#" },
];

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Figma: no explicit bg rectangle on footer area — white bg with black text
    <footer className='bg-white'>
      <Container className='!px-0 !pb-12 !pt-0'>
        {/* Desktop View — Poppins 400 14px #000, green dots #6abd45 10×10px */}
        <div className='hidden md:flex flex-wrap justify-center items-center gap-y-3'>
          {serviceLinks.map((link, i) => (
            <span key={link.label} className='flex items-center'>
              <Link
                href={link.href}
                className='text-black hover:text-zinc-600 transition-colors whitespace-nowrap px-3'
                style={{
                  fontSize: "14px",
                  lineHeight: "21px",
                }}
              >
                {link.label}
              </Link>
              {i < serviceLinks.length - 1 && (
                /* Figma: Ellipse 10×10px bg=#6abd45 */
                <span
                  className='w-2.5 h-2.5 rounded-full flex-shrink-0'
                  style={{ backgroundColor: "#6abd45" }}
                />
              )}
            </span>
          ))}
        </div>

        {/* Mobile View — Custom Dropdown for Quick Links */}
        <div className='md:hidden px-4'>
          <div className='border border-[#d7d7d7] rounded-md overflow-hidden bg-white'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='w-full flex justify-between items-center px-4 py-3 bg-white'
            >
              <span className='font-heading text-[16px] text-black'>
                Quick Links
              </span>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {isOpen && (
              <div className='border-t border-[#d7d7d7] flex flex-col items-center py-4 gap-4'>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className='text-black text-center px-4 transition-colors'
                    style={{ fontSize: "14px", lineHeight: "1.5" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Divider — Figma: Line stroke=#d7d7d7 1px */}
        <div className='my-5 border-t border-[#d7d7d7]' />

        {/* Copyright — Figma: Poppins 300 14px #000000, centered */}
        <p
          className='text-center text-black px-4'
          style={{
            fontSize: "14px",
            lineHeight: "21px",
            fontWeight: 300,
          }}
        >
          Copyrights &copy; 2026 All Rights Reserved by Fiveonline
        </p>
      </Container>
    </footer>
  );
}
