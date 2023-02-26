import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    
  }, []);

  return (
    <nav className="navbar" style={{ show }}>
      <img src={`${process.env.PUBLIC_URL}/netflix-logo.png`} className="nav__logo" />
      <img src={`${process.env.PUBLIC_URL}/netflix-avatar.png`}  className="nav__avatar" />
    </nav>
  );
};

export default Navbar;
