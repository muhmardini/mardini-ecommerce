import { useRef } from "react";
import {
  faArrowRightFromBracket,
  faBars,
  faCartShopping,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../stores/store";
export const Header = () => {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-gradient hover:text-background transition-colors transition-all ${
      isActive ? "active" : "text-gradient hover:text-background"
    }
    `;
  const itemsCount = useCart((state) => state.itemsCount);
  const [openNav, setOpenNav] = useState(false);
  const [dark, setDark] = useState(localStorage.getItem("theme")?true:false);
  const themeRef = useRef(null);
  return (
    <header className="flex justify-between items-center px-10 md:py-5 py-3 bg-secondary rounded-b-3xl fixed w-full top-0 left-0 z-50 transition-discrete">
      <div className="flex gap-4">
        <button
          onClick={() => setOpenNav(!openNav)}
          type="button"
          className="text-primary md:hidden cursor-pointer hover:text-background transition duration-200"
          title="menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="">
          <Link className="flex justify-between items-center gap-2 transition" to="/">
            <img
              className="md:w-10 w-8"
              src="/icons/MardiniLogo.svg"
              alt="website logo"
            />
            <h2 className="text-gradient">Mardini</h2>
          </Link>
        </div>
      </div>
      <nav className="">
        <button
          onClick={() => setOpenNav(false)}
          type="button"
          title="exit nav menu"
          className="block md:hidden relative"
        >
          <Link to="/cart">
            <FontAwesomeIcon
              className="text-xl text-primary cursor-pointer"
              icon={faCartShopping}
            />
            <div className="absolute size-3.5 -top-1.5 -right-1.5 text-[8px] text-background bg-red-500 flex justify-center items-center rounded-full border border-background">
              {itemsCount}
            </div>
          </Link>
        </button>
        <ul className="hidden md:flex md:gap-10 md:items-center transition-all">
          <li>
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Products" className={navClass}>
              Products
            </NavLink>
          </li>
          <li className="relative">
            <NavLink to="/Cart" className={navClass}>
              My Cart
            </NavLink>
            <div className="absolute size-3.5 top-1.5 -right-4.5 text-[8px] text-background bg-red-500 flex justify-center items-center rounded-full border border-background">
              {itemsCount}
            </div>
          </li>
          <li>
            <NavLink to="/About" className={navClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className={navClass}>
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Favorite" className={navClass}>
              Favorite
            </NavLink>
          </li>
        </ul>
      </nav>
        <nav
          className={`${openNav ? "translate-x-0" : "-translate-x-full"} duration-300 ease-in-out transform-y-0 fixed left-0 top-0 py-4 px-6 w-1/2 h-1/1 transition-all bg-secondary border border-background`}
        >
          <ul className={`flex flex-col gap-6 `}>
            <li className="flex justify-between">
              <button type="button" title="switch theme">
                <FontAwesomeIcon
                  ref={themeRef}
                  icon={dark ? faMoon : faSun}
                  className={`${dark ? "text-background" : "text-amber-300"} cursor-pointer text-xl`}
                  onClick={() => {setDark(!dark);localStorage.setItem("theme",`${dark}`)}}
                />
              </button>
              <button
                onClick={() => setOpenNav(false)}
                type="button"
                title="exit nav menu"
                className=""
              >
                <FontAwesomeIcon
                  className="text-xl text-red-500 cursor-pointer"
                  icon={faArrowRightFromBracket}
                />
              </button>
            </li>
            <li>
              <NavLink to="/" className={navClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Products" className={navClass}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/Cart" className={navClass}>
                My Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className={navClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={navClass}>
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink to="/Favorite" className={navClass}>
                Favorite
              </NavLink>
            </li>
          </ul>
        </nav>
    </header>
  );
};
// make the nav appear with animation and smooth
// add light mode and dark mode
