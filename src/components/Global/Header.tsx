import { useEffect, useRef } from "react";
import {
  faBars,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../stores/store";
import { useNavStore } from "../../stores/navStore";
export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastPoint = useRef(0)
  useEffect(() => {
    const hideHeader = () => {
      const scrollValue = window.scrollY;
      if(scrollValue > lastPoint.current){
        setShowHeader(false)
      }else{
        setShowHeader(true)
      }

      lastPoint.current = scrollValue
    }

    window.addEventListener('scroll', hideHeader)
    return () => window.removeEventListener('scroll',hideHeader)
  },[])

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-gradient hover:text-background transition-colors transition-all ${
      isActive ? "active" : "text-gradient hover:text-background"
    }
    `;
  const itemsCount = useCart((state) => state.itemsCount);
  const toggleNav = useNavStore((state) => state.toggleNav)
  const closeNav = useNavStore((state) => state.closeNav)
  return (
    <header className={`flex justify-between items-center px-10 md:py-5 py-3 bg-secondary rounded-b-3xl fixed w-full top-0 left-0 z-50 transition-transform ${showHeader? "translate-y-0" : "-translate-y-full"} transition-transform border-background border-b duration-500`}>
      <div className="flex gap-4">
        <button
          onClick={toggleNav}
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
          onClick={() => closeNav()}
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


        
    </header>
  );
};
