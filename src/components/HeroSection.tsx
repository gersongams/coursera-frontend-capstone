import {NavLink} from 'react-router-dom';
import HeroImage from "../assets/gourmet.jpg"

const HeroSection = () => {
  return (
    <section className="mx-auto px-8 flex flex-col justify-center items-center py-40 bg-secondary">
      <div className="container max-w-6xl flex flex-col md:flex-row justify-center items-center gap-8 ">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-6xl font-bold text-primary">
            Little Lemon
          </h1>
          <h2 className="text-4xl font-bold text-white mb-4">
            Chicago
          </h2>
          <p className="text-white text-2xl max-w-prose mb-8">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern
            twist.
          </p>
          <NavLink to="/reservations">
            <button
              className="bg-primary text-secondary px-8 py-4 rounded-xl font-bold hover:bg-secondary hover:text-primary"
            >Reserve a Table
            </button>
          </NavLink>
        </div>
        <div>
          <div className="image-box">
            <img
              className="w-80 h-80 object-cover rounded-xl shadow-2xl"
              src={HeroImage} alt="Serving delicious dish"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
