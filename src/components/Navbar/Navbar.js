import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 100) {
        setShow('#111');
      } else {
        setShow('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" style={{ show }}>
      <img src={`${process.env.PUBLIC_URL}/netflix-logo.png`} className="nav__logo" />
      <img src={`${process.env.PUBLIC_URL}/netflix-avatar.png`}  className="nav__avatar" />
    </nav>
  );
};

export default Navbar;
