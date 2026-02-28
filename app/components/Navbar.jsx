"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo1 from "../assets/logo1.png";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // ==============================
  // 🌙 Load Saved Theme
  // ==============================
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // ==============================
  // 🌙 Toggle Theme
  // ==============================
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  // ==============================
  // 🔥 Hide Navbar on Scroll Down
  // ==============================
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ==============================
  // 🎯 Active Section Highlight
  // ==============================
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () =>
      sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLink = (id, label) => (
    <a
      href={`#${id}`}
      onClick={() => setMenuOpen(false)}
      className={`transition duration-300 ${
        activeSection === id
          ? "text-indigo-600 dark:text-indigo-400 font-semibold"
          : "text-gray-700 dark:text-gray-300"
      }`}
    >
      {label}
    </a>
  );

  return (
    <nav
      className={`fixed w-full z-50 px-6 lg:px-8 py-4 flex items-center justify-between
      transition-all duration-500
      ${isScrolled ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-md" : ""}
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      {/* Logo */}
      <a href="#top">
        <Image src={logo1} alt="Logo" className="w-28" />
      </a>

      {/* Desktop Menu */}
      <ul className="items-center hidden gap-8 md:flex">
        <li>{navLink("top", "Home")}</li>
        <li>{navLink("about", "About")}</li>
        <li>{navLink("projects", "Projects")}</li>
        <li>{navLink("contact", "Contact")}</li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* 🌙 Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 transition rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Image
            src={darkMode ? assets.sun_icon : assets.moon_icon}
            alt="Theme"
            width={22}
            height={22}
          />
        </button>

        {/* Contact Button */}
        <a
          href="#contact"
          className="items-center hidden gap-2 px-6 py-2 border border-gray-500 rounded-full lg:flex dark:border-gray-400"
        >
          Contact
          <Image src={assets.arrow_icon} alt="" className="w-3" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden"
        >
          <Image src={assets.menu_black} alt="" className="w-6 dark:invert" />
        </button>
      </div>

      {/* ==========================
          📱 Mobile Side Menu
         ========================== */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white dark:bg-gray-900 shadow-lg
        transform transition-transform duration-500 md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setMenuOpen(false)}>
            <Image src={assets.close_black} alt="" className="w-5 dark:invert" />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-6 mt-10 text-lg">
          <li>{navLink("top", "Home")}</li>
          <li>{navLink("about", "About")}</li>
          <li>{navLink("projects", "Projects")}</li>
          <li>{navLink("contact", "Contact")}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;