import NavLinks from './NavLinks'

const Navigation = () => {
  return (
    <div
      className="hidden md:flex"
    >
      <NavLinks
        isMobile={false}
        closeMobileMenu={() => {
        }}
      />
    </div>
  )
}

export default Navigation
