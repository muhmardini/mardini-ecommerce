import { faMoon, faSun, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavStore } from '../../stores/navStore';
const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-gradient hover:text-background transition-colors transition-all ${
      isActive ? "active" : "text-gradient hover:text-background"
    }
    `;
const SmallNav = () => {
    
  const [dark, setDark] = useState(localStorage.getItem("theme")?true:false);
  const themeRef = useRef(null);
  const nav = useNavStore((state) => state.nav);
  const closeNav = useNavStore((state) => state.closeNav)
  return (
    <nav
          className={`${nav ? "translate-x-0" : "-translate-x-full"} duration-300 ease-in-out transform-y-0 fixed left-0 top-0  py-4 px-6 w-50 h-100 z-50 transition-all bg-secondary border border-background`}
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
                onClick={() => closeNav()}
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
              <NavLink onClick={closeNav} to="/" className={navClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeNav} to="/Products" className={navClass}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeNav} to="/Cart" className={navClass}>
                My Cart
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeNav} to="/About" className={navClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeNav} to="/Contact" className={navClass}>
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeNav} to="/Favorite" className={navClass}>
                Favorite
              </NavLink>
            </li>
          </ul>
        </nav>
  )
}

export default SmallNav