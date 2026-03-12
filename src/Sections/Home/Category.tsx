
import { motion } from "motion/react"
import { CatCard } from "../../components/Home/CatCard"
import { categories } from "../../constant/categories-info"

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }
}


export const Category = () => {
    return (
        <section className="flex flex-col items-center bg-gray-50 pb-10">
            <h1 className="mt-10">Our Categories</h1>
            <motion.div variants={container} viewport={{once: true, amount: 0.4}} initial="hidden" whileInView="show" className="grid md:grid-cols-4 grid-cols-2 gap-x-6 md:gap-x-32 gap-y-12 mt-10 perspective-[1000px]">
                {categories.map(e => (
                    <CatCard key={e.title} iconName={e.iconName} catText={e.title}/>
                ))}
            </motion.div>
        </section>
    )
}