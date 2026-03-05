
import { CatCard } from "../../components/Home/CatCard"
import { categories } from "../../constant/categories-info"
export const Category = () => {
    return (
        <section className="flex flex-col items-center bg-gray-50 pb-10">
            <h1 className="mt-10">Our Categories</h1>
            <div className="grid grid-cols-4 gap-x-32 gap-y-12 mt-10">
                {categories.map(e => (
                    <CatCard key={e.title} iconName={e.iconName} catText={e.title}/>
                ))}
            </div>
        </section>
    )
}