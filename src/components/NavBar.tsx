"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, MenuLink, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { AnimatePresence, useMotionValueEvent, useScroll, motion } from "framer-motion";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

export function Navbar({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();

  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      if (current >= 0.05) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? -100 : 0,
          opacity: visible ? 0 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
          <Menu setActive={setActive}>
            <MenuLink href="#about">About</MenuLink>
            
            <MenuItem setActive={setActive} active={active} item="Projects">
              <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  // src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
              </div>
            </MenuItem>

            <MenuLink href="#contact">Contact</MenuLink>
          </Menu>
      </motion.div>
      </AnimatePresence>
  );
}
