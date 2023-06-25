import Form from './Form';

const ReservationsPage = () => (
  <div
    className="md:h-screen px-8 py-8 w-screen bg-cover bg-center flex flex-col justify-center items-center"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.73)), url("https://a.cdn-hotels.com/gdcs/production141/d778/6b200721-9661-4680-aca2-d6e33ce46cf0.jpg")`,
      backgroundSize: "cover"
    }}
  >
    <div className="container flex flex-col md:flex-row gap-4 md:gap-16 justify-center">
      <div className="text-white max-w-prose flex flex-col justify-center">
        <h2
         className="text-4xl font-bold mb-4"
        >Experience the perfect balance of tradition and luxury.</h2>
        <p
         className="mb-4 text-xl"
        >At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a
          touch of <em>tradition</em>.</p>
        <p className="mb-4 text-xl">Book a table with us to share in this experience.</p>
      </div>
      <div className="bg-white p-6 md:p-8 rounded-xl">
        <h1
         className="text-2xl font-bold mb-4"
        >Reserve a Table</h1>
        <p
          className="mb-4"
        >Please fill in and submit form to book your reservation at Little Lemon.</p>
        <Form/>
      </div>
    </div>
  </div>
);

export default ReservationsPage
