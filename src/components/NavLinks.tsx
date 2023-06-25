import {motion} from "framer-motion";
import {NavLink} from 'react-router-dom';

interface NavLinksProps {
  isMobile: boolean;
  closeMobileMenu: () => void;
}

const NavLinks = ({ isMobile, closeMobileMenu }: NavLinksProps) => {
  const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}

  return (
    <motion.ul
      className={`bg-white flex gap-4 ${isMobile ? "flex-col absolute w-52 p-4 right-0 top-0" : "flex-row items-center"}`}
      initial={animateFrom}
      animate={animateTo}
      transition={{delay: 0.05}}
    >
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.05}}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <NavLink
          className={({isActive}) =>
            `nav-link ${isActive ? "active-links" : ""}`
          }
          to="/"
        >Home</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.10}}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <NavLink to="#">About</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.15}}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <NavLink to="#">Menu</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.20}}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <NavLink to="/reservations">Reservations</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.25}}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <NavLink to="#">Order Online</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.30}}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <NavLink to="#">Login</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.35}}
        onClick={() => isMobile && closeMobileMenu()}
        className="donate"
      >
        <NavLink to="#">Donate</NavLink>
      </motion.li>
    </motion.ul>
  )
}

export default NavLinks
