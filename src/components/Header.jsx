import { Link } from "wouter";

function Header() {
  return (
    <>
      <div className="header">
        <Link href="/">The Travel Blog</Link>
        {/* <a href="#">The Travel Blog</a> */}
        <ul>
          <li>
            <Link href="/">Home</Link>
            {/* <a href="#">Home</a> */}
          </li>
          <li>
            <Link href="/newlocation">Add Location</Link>
            {/* <a href="#">Add Location</a> */}
          </li>
          <li>
            <a href="#">The Traveler</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
