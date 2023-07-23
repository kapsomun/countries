"use client";
import React, {useEffect, useState } from "react";
import Container from "./Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const switchTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <Link className="header__link" href="/">
            Where in the world ?
          </Link>
          <div className="header__switcher" onClick={switchTheme}>
            {theme === "light" ? <IoMoonOutline /> : <IoMoon />}
            {theme} Theme
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
