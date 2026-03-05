export const Hero = () =>{
    return(
        <section className="relative h-lvh w-full flex justify-center items-center">
            <img className="absolute top-0 left-0 w-full h-full object-cover" src="/images/Hero-image.jpg" alt="t-shirt hero image" />
            <div className="bg-black absolute top-0 left-0 opacity-60 z-1 w-full h-full"></div>
            <div className="absolute z-10 text-center flex flex-col gap-14">
                <h1 className="text-primary w-96">Elevate fashion for modern living</h1>
                <div className="flex justify-around gap-6">
                    <button className="btn-primary btn" type="button">Shop Now</button>
                    <button className="btn btn-background" type="button">About Us</button>
                </div>
            </div>
        </section>
    )
}