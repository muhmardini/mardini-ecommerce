import {NavLink} from 'react-router-dom'
export const Header = () =>{
    const navClass = ({isActive}:{isActive: boolean}) =>
        `text-gradient hover:text-background transition-colors transition-all ${
    isActive
      ? "active"
      : "text-gradient hover:text-background"
  }
        `
    return(
        <header className="flex justify-between items-center px-10 py-5 bg-secondary rounded-b-3xl fixed w-full top-0 left-0 z-50 transition-discrete">
            <div className="flex justify-between items-center gap-2 ">
                <img className="w-10" src="./public/icons/MardiniLogo.svg" alt="website logo"/>
                <h2 className="text-gradient">Mardini</h2>
            </div>
            <nav className="">
                <ul className="flex gap-10 items-center transition-all">
                    <li><NavLink to="/" className={navClass}>Home</NavLink></li>
                    <li><NavLink to="/Products" className={navClass}>Products</NavLink></li>
                    <li><NavLink to="/Cart" className={navClass}>My Cart</NavLink></li>
                    <li><NavLink to="/About" className={navClass}>About</NavLink></li>
                    <li><NavLink to="/Contact" className={navClass}>Contact us</NavLink></li>  
                    <li><NavLink to="/Favorite" className={navClass}>Favorite</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}