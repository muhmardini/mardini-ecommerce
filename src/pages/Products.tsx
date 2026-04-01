import HeroProduct from "../features/products/components/HeroProduct"
import MainProducts from '../features/products/components/MainProducts'
export const Products = () => {
    return (
        <main className="min-h-screen">
            <HeroProduct />
            <MainProducts />    
        </main>
    )
}
