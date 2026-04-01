import { Category } from '../components/Home/Category'
import { Hero } from '../components/Home/Hero'
import {FeatureProducts} from "../components/Home/FeatureProducts"

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

