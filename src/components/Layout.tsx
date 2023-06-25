import React from "react";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <main>
      <Navbar/>
      {children}
      <Footer/>
    </main>
  )
}


export default Layout
