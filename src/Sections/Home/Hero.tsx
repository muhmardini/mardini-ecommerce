import { motion } from "motion/react"
import { Link } from "react-router-dom"

export const Hero = () =>{
    return(
        <section className="relative h-lvh w-full flex justify-center items-center">
            <img className="absolute top-0 left-0 w-full h-full object-cover" src="/images/Hero-image.jpg" alt="t-shirt hero image" />
            <div className="bg-black absolute top-0 left-0 opacity-60 z-1 w-full h-full"></div>
            <div className="absolute z-10 text-center flex flex-col gap-14">
                <motion.h1 initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration: 1, ease: "easeInOut"}} className="text-primary w-96">Elevate fashion for modern living</motion.h1>
                <div className="flex justify-around gap-6">
                    <motion.button initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration: 1, ease: "easeInOut"}} className="btn-primary btn" type="button"><Link to="/Products">Shop Now</Link></motion.button>
                    <motion.button initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration: 1, ease: "easeInOut"}} className="btn btn-background" type="button"><Link to='/About'>About Us</Link></motion.button>
                </div>
            </div>
        </section>
    )
}