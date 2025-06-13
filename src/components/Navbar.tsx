"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg"
          : "bg-transparent border-b-2 border-white/80"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Business Name */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={`${isScrolled ? "/logo/logo.png" : "/logo/logo_white.png"}`}
              alt="바야 로고"
              width={100}
              height={100}
              className="w-auto h-8"
            />
            <span
              className={`font-pretendard font-bold text-xl break-keep transition-colors duration-300 ${
                isScrolled ? "text-blue-1000" : "text-white"
              }`}
            >
              바야
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/quote"
                className={`font-pretendard transition-colors break-keep ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-1000"
                    : "text-white hover:text-gray-100"
                }`}
              >
                바야 견적소
              </Link>
              <Link
                href="/coming-soon"
                className={`font-pretendard transition-colors break-keep ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-1000"
                    : "text-white hover:text-gray-100"
                }`}
              >
                포트폴리오
              </Link>
              <Link
                href="https://brunch.co.kr/@@hQRf"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-pretendard transition-colors break-keep ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-1000"
                    : "text-white hover:text-gray-100"
                }`}
              >
                블로그
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <Link
              href="/inquiry"
              className={`hidden md:block px-6 py-3 rounded-lg font-pretendard font-medium transition-all duration-300 hover:shadow-lg break-keep ${
                isScrolled
                  ? "bg-blue-1000 text-white hover:bg-blue-900"
                  : "bg-white text-blue-1000 hover:bg-gray-100"
              }`}
            >
              프로젝트 문의하기
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 transition-transform duration-300 ${
                    isScrolled ? "bg-blue-1000" : "bg-white"
                  } ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`w-full h-0.5 transition-opacity duration-300 ${
                    isScrolled ? "bg-blue-1000" : "bg-white"
                  } ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`w-full h-0.5 transition-transform duration-300 ${
                    isScrolled ? "bg-blue-1000" : "bg-white"
                  } ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/coming-soon"
              className="font-pretendard text-gray-700 hover:text-blue-1000 transition-colors py-2 break-keep"
              onClick={() => setIsMenuOpen(false)}
            >
              바야 견적소
            </Link>
            <Link
              href="/coming-soon"
              className="font-pretendard text-gray-700 hover:text-blue-1000 transition-colors py-2 break-keep"
              onClick={() => setIsMenuOpen(false)}
            >
              포트폴리오
            </Link>
            <Link
              href="https://brunch.co.kr/@@hQRf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-pretendard text-gray-700 hover:text-blue-1000 transition-colors py-2 break-keep"
              onClick={() => setIsMenuOpen(false)}
            >
              블로그
            </Link>
            <Link
              href="/inquiry"
              className="bg-blue-1000 text-white px-6 py-3 rounded-lg font-pretendard font-medium hover:bg-blue-900 transition-all duration-300 hover:shadow-lg break-keep"
              onClick={() => setIsMenuOpen(false)}
            >
              프로젝트 문의하기
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
