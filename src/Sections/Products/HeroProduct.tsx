const HeroProduct = () => {
  return (
    <section className='py-24 background-gradient flex md:flex-row flex-col-reverse min-h-[calc(100vh - 20px)]'>
        <div className='md:flex-1 md:pl-8 px-4'>
            <h1 className='text-2xl md:text-start text-center md:text-5xl w-full md:w-[80%] pt-6'>Lightweight sneakers with a breathable mesh upper and cushioned sole, designed for all-day comfort and easy movement. Perfect for running, walking, or casual wear.</h1>
            <div className='flex gap-12 mt-16 md:justify-start  md:ml-10 justify-center items-center'>
                <button type="button" className='btn btn-secondary  shadow-2xl px-8 shadow-basic hover:shadow-xl'>Add to Cart</button>
                <button type="button" className='btn btn-background shadow-2xl px-10 shadow-basic hover:shadow-xl'>Buy Now</button>
            </div>
        </div>
        <div className='relative self-center md:flex-1'>
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