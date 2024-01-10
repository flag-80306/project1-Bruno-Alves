import { useState } from "react";
import { Link } from "wouter";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={`header ${menuOpen ? "open" : ""}`}>
        <Link href="/">The Travel Blog</Link>
        <div className="menuIcon" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
        <div className="menuMask" onClick={() => setMenuOpen(false)}></div>
        <div className="closeMenuIcon" onClick={() => setMenuOpen(false)}>
          ⛝
        </div>
        <ul className={`menuNav ${menuOpen ? "open" : ""}`}>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/newlocation" onClick={() => setMenuOpen(false)}>
              Add Location
            </Link>
          </li>
          <li>
            <Link href="/aboutme" onClick={() => setMenuOpen(false)}>
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
