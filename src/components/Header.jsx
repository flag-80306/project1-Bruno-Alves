import { useState } from "react";
import { Link } from "wouter";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={`header ${menuOpen ? "open" : ""}`}>
        <Link href="/">The Travel Blog</Link>
        <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <div className="closeMenuIcon" onClick={() => setMenuOpen(!menuOpen)}>
          ⛝
        </div>
        <ul className={`menuNav ${menuOpen ? "open" : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/newlocation">Add Location</Link>
          </li>
          <li>
            <Link href="/aboutme">About Me</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
