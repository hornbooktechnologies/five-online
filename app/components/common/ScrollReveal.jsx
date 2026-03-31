"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/utils/animations";

/**
 * ScrollReveal — wraps children with a Framer Motion fade-up animation
 * triggered when the element enters the viewport.
 *
 * @param {string}   as        - HTML element to render (default: "div")
 * @param {object}   variants  - override default fadeUp variants
 * @param {boolean}  stagger   - use staggerContainer as parent (for grids/lists)
 * @param {string}   className - passthrough className
 * @param {number}   delay     - extra delay in seconds
 */
export default function ScrollReveal({
  children,
  as = "div",
  variants,
  stagger = false,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  const selectedVariants = stagger ? staggerContainer : (variants ?? fadeUp);

  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      ref={ref}
      variants={selectedVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...(delay > 0
        ? {
            transition: {
              delay,
              ...(selectedVariants.visible?.transition ?? {}),
            },
          }
        : {})}
    >
      {children}
    </Tag>
  );
}
