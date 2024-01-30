import "./menu.scss";

import { useEffect } from "react";


import SmoothScroll from 'smooth-scroll';





export default function Menu({ menuOpen, setMenuOpen }) {



useEffect(() => {
  new SmoothScroll('a[href*="#"]', {
    speed: 300 // speed of the scrolling
  });
}, []);
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#work">Work Experience</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#education">Education</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#project">Personal Projects</a>
        </li>
        
      </ul>
    </div>
  );
}
