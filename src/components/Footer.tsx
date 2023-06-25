import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mx-auto px-8 flex flex-col justify-center items-center pt-40 pb-8 bg-secondary">
      <div className="container  flex flex-col md:flex-row justify-center items-center gap-8 ">
        <div className="text-white">
          <div className="mb-8 flex flex-col md:flex-row items-center">
            <img src={Logo} alt="Little Lemon logo"/>
            <p
              className="max-w-prose pt-4 md:pt-0"
            >Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively
              but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <h5 className="font-bold mb-2">LOCATIONS</h5>
              <ul>
                <li>Accra</li>
                <li>Kumasi</li>
                <li>Cape Coast</li>
                <li>Tamale</li>
              </ul>
            </div>
            <div className="col-span-1">
              <h5 className="font-bold mb-2">OPENING TIMES</h5>
              <ul>
                <li>Mon - Wed: 10:30AM - 12:00AM</li>
                <li>Fri: 12:00PM - 1:00AM</li>
                <li>Sat - Sun: 10:30AM - 12:00AM</li>
              </ul>
            </div>
            <div className="col-span-1">
              <h5 className="font-bold mb-2">CONTACT US</h5>
              <ul>
                <li>96 Abafom Road, North Ridge - Accra</li>
                <li>Tel: 020 7928 0678</li>
                <li>Email: info@littlelemon.com</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
