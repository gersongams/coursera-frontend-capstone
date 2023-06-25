import SpecialsCard from './SpecialsCard'

const Specials = () => {
  return (
    <section className="mx-auto px-8 flex flex-col justify-center items-center py-40 bg-white">
      <div className="container max-w-6xl flex flex-col justify-center gap-8">
        <div className="flex justify-between">
          <h1
            className="text-4xl font-bold text-black"
          >This Weeks Specials</h1>
          <div>
            <button
              className="bg-primary text-secondary px-8 py-4 rounded-xl font-bold hover:bg-secondary hover:text-primary"
            >Online Menu
            </button>
          </div>
        </div>
        <SpecialsCard/>
      </div>
    </section>
  )
}

export default Specials
