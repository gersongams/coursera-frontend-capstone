import {NavLink} from 'react-router-dom'
import {MdDeliveryDining} from "react-icons/md"

import Dessert1 from "../assets/salad.jpg"
import Dessert2 from "../assets/bruschetta1.jpg"
import Dessert3 from "../assets/creme.jpg"

const specialMenus = [
  {
    image: Dessert1,
    title: "Greek Salad",
    price: "$12.99",
    description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
    order: "Order a delivery"
  },
  {
    image: Dessert2,
    title: "Bruschetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
    order: "Order a delivery"
  },
  {
    image: Dessert3,
    title: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    order: "Order a delivery"
  }
]

const SpecialsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {specialMenus.map(({
                           title,
                           price,
                           image,
                           description,
                           order
                         }) =>
        (
          <div
            key={title}
            className="flex flex-col rounded-xl shadow-2xl">
            <div className="rounded-t-xl">
              <img
                className="w-full h-64 object-cover rounded-t-xl"
                src={image} alt="Special dessert"/>
            </div>
            <div className="bg-gray-300 p-8">
              <div className="flex justify-between mb-4">
                <h3
                  className="text-2xl font-bold text-black">{title}</h3>
                <h3
                  className="text-2xl font-bold text-black"
                >{price}</h3>
              </div>
              <p
                className="text-black mb-4"
              >{description}</p>
              <NavLink to="#">
                <h4 className="flex justify-between text-black font-bold">
                  {order}
                  {<MdDeliveryDining size={30} style={{color: "#333333", marginLeft: "10px",}}/>}
                </h4>
              </NavLink>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default SpecialsCard
