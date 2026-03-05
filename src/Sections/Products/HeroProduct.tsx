const HeroProduct = () => {
  return (
    <section className='pt-24 background-gradient flex h-screen'>
        <div className='flex-1 pl-8'>
            <h1 className='text-5xl w-[80%] pt-6'>Lightweight sneakers with a breathable mesh upper and cushioned sole, designed for all-day comfort and easy movement. Perfect for running, walking, or casual wear.</h1>
            <div className='flex gap-12 mt-16 ml-10'>
                <button type="button" className='btn btn-secondary  shadow-2xl px-8 shadow-basic hover:shadow-xl'>Add to Cart</button>
                <button type="button" className='btn btn-background shadow-2xl px-10 shadow-basic hover:shadow-xl'>Buy Now</button>
            </div>
        </div>
        <div className='relative flex-1'>
            <img
            src="images/product-background.png"
            alt="product-background"
            className='w-150'
            />
            <img
            src="images/pngwing.com.png"
            alt="shoe"
            className='absolute -top-12 -left-6 w-150'
            />
        </div>
    </section>
  )
}

export default HeroProduct