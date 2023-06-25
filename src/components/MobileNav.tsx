import {useState} from 'react'
import NavLinks from './NavLinks'
import {GrClose, GrMenu} from "react-icons/gr";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const closeMobileMenuOnClick = () => setOpen(false);

  const closeMenu = <GrMenu className="hamburger" size="20px" onClick={() => setOpen(!open)}/>
  const openMenu = <GrClose className="hamburger close-menu" size="20px" onClick={() => setOpen(!open)}/>
  return (
    <nav className="flex md:hidden items-center">
      {open ? openMenu : closeMenu}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenuOnClick}/>}
    </nav>
  )
}

export default MobileNav
