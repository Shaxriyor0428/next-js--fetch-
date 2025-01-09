"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();

  const activationClass = (pathname: string) => {
    return pathname === path
      ? "text-red-500 font-semibold border-b-2 border-red-500"
      : "text-gray-700 hover:text-red-500 hover:border-b-2 hover:border-red-500 transition-all duration-300";
  };

  return (
    <header className="h-16 shadow-md sticky top-0 left-0 w-full bg-gradient-to-r from-white via-gray-50 to-gray-100 z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center h-full">
        <div className="text-2xl font-bold text-gray-700">
          <Link href={"/"}>MySite</Link>
        </div>
        <ul className="flex gap-8 text-lg h-full items-center">
          <li>
            <Link href={"/"} className={activationClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/products"} className={activationClass("/products")}>
              Products
            </Link>
          </li>
          <li>
            <Link href={"/about"} className={activationClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className={activationClass("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
