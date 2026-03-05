import { Category } from '../Sections/Home/Category'
import { Hero } from '../Sections/Home/Hero'
import {FeatureProducts} from "../Sections/Home/FeatureProducts"

export const Home = () => {
    return(
        <main className="Home">
            <Hero />
            <Category />
            <div className='h-px w-auto mx-80 mt-40 bg-secondary'></div>
            <FeatureProducts  />
        </main>
    )
}

