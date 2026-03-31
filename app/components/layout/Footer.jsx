import Link from "next/link";
import Container from "../common/Container";

// Figma: service links with #6abd45 green dot separators, Poppins 400 14px
const serviceLinks = [
  { label: "Web Design Company in Mumbai", href: "#" },
  { label: "Ecommerce Website Development", href: "#" },
  { label: "Shopify Developers in India", href: "#" },
  { label: "Corporate Website Design", href: "#" },
  { label: "Website Redesign Services", href: "#" },
];

export default function Footer() {
  return (
    // Figma: no explicit bg rectangle on footer area — white bg with black text
    <footer className='bg-white border-t border-[#d7d7d7]'>
      <Container className='!px-0'>
        {/* Service keyword links — Figma: Poppins 400 14px #000, green dots #6abd45 10×10px */}
        <div className='flex flex-wrap justify-center items-center gap-y-3'>
          {serviceLinks.map((link, i) => (
            <span key={link.label} className='flex items-center'>
              <Link
                href={link.href}
                className='font-body text-black hover:text-zinc-600 transition-colors whitespace-nowrap px-3'
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

        {/* Divider — Figma: Line stroke=#d7d7d7 1px */}
        <div className='my-5 border-t border-[#d7d7d7]' />

        {/* Copyright — Figma: Poppins 300 14px #000000, centered */}
        <p
          className='font-body text-center text-black'
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
