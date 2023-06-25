import {NavLink} from "react-router-dom";
import Navigation from "./Navigation.tsx";
import MobileNav from "./MobileNav.tsx";
import Logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className="flex h-24 px-4">
      <div className="container mx-auto flex">
        <div className="max-w-xs mr-auto py-2">
          <NavLink className="h-full" to="/">
            <img
              data-testid={"logo"}
              className="w-full h-full" src={Logo} alt="Little Lemon logo"/>
          </NavLink>
        </div>
        <Navigation/>
        <MobileNav/>
      </div>
    </nav>
  )
}
export default Navbar
