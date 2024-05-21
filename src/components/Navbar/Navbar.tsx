import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const isMobile = useMediaQuery({ maxWidth: 990 });

  const toggleMenu = (): void => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu(!isMobile);
  }, [isMobile]);

  return (
    <header className="header">
      <nav className="nav container">
        {isMobile && (
          <div
            className={`nav-burger ${showMenu ? "d-none" : "d-block"}`}
            id="nav-toggle"
          >
            <IoMenu onClick={toggleMenu} />
          </div>
        )}

        {isMobile && (
          <div
            className={`nav__close  ${!showMenu ? "d-none" : "d-block"}`}
            id="nav-close"
          >
            <IoClose onClick={toggleMenu} />
          </div>
        )}

        <div
          className={`nav-menu ${showMenu ? "d-block" : "d-none"}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/todo" className="nav__link">
                To do application
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/table" className="nav__link">
                Api Table
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
