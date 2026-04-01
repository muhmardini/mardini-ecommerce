

import { testimonial } from "@/constant/about.constants"


const Testimonials = () => {
  return (
    <ul className="flex flex-col gap-6 w-4/5">
        {
            testimonial.map(i => (
                <li key={i.id} className="flex flex-col md:flex-row bg-secondary py-8 px-2 justify-between items-center rounded-[50px] group hover:bg-primary transition duration-300" >
                    <div className="flex-1 flex flex-col items-center gap-2">
                        <img className="size-26 rounded-full" src={i.image} alt="Testimonial-1" />
                        <h3 className="text-center text-primary group-hover:text-secondary transition duration-300">{i.name}</h3>
                    </div>
                    <div className="flex-2">
                        <p className="text-background md:border-t-0 md:border-l border-t border-background md:p-6 p-4 mt-4 group-hover:text-basic transition duration-300">{i.message}</p>
                    </div>
                </li>
            ))
        }
    </ul>
  )
}

export default Testimonials