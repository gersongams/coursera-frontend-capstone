import * as yup from "yup";
import {useFormik} from "formik";

const schema = yup.object({
  name: yup.string().required("Full name is a required field!"),
  email: yup.string().required("Email is a required field!").email("Email is not valid!"),
  telephone: yup.string().required("Telephone is a required field!").matches(/^(\+\d{2,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{4}$/, "Phone number must match the form 233 00 000 0000"),
  guests: yup.number().min(1, "There must be at least 1 guest!").required("Please specify number of guests per table!"),
  date: yup.string().required("Please select date and time!"),
})

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      telephone: "",
      occasion: "",
      guests: "",
      date: "",
    },
    validationSchema: schema,
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <fieldset>
        <div className="flex flex-col mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <span
            className="mt-1 text-red-500 text-xs italic">{formik.touched.name && formik.errors.name}</span>
        </div>
        <div className="flex flex-col mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input type="text" placeholder="text@email.com" name="email"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.email}
          />
          <span className="mt-1 text-red-500 text-xs italic">{formik.errors.email}</span>
        </div>
        <div className="flex flex-col mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">Telephone</label>
          <input type="tel" placeholder="233 00 000 0000" name="telephone"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.telephone}
          />
          <span className="mt-1 text-red-500 text-xs italic">{formik.errors.telephone}</span>
        </div>
        <div className="flex flex-col mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="occasion">Occasion (optional)</label>
          <div>
            <select name="occasion"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.occasion}
            >
              <option value="select">Select occasion</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guests">Guests</label>
          <input type="number" placeholder="2" name="guests"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.guests}
          />
          <span className="mt-1 text-red-500 text-xs italic">{formik.errors.guests}</span>
        </div>
        <div className="flex flex-col mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date & Time</label>
          <input type="datetime-local" name="date"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.date}
          />
          <span className="mt-1 text-red-500 text-xs italic">{formik.errors.date}</span>
        </div>
        <div className="flex">
          <button
            className="ml-auto bg-primary text-secondary px-8 py-4 rounded-xl font-bold hover:bg-secondary hover:text-primary"
            type="submit">Reserve
          </button>
        </div>
      </fieldset>
    </form>
  )
};

export default Form
