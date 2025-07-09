import React from 'react'
import Slider from 'react-slick';
import img1 from "../assets/bgcover.png";



const Home = () => {

    const HeroData = [
        {
            id: 1,
            subtitle: "Buy Now",
            title: "A Tasty of luxury",
            title2: "LEATHER",
            image: img1,
        },
        {
            id: 2,
            subtitle: "Buy Now",
            title: "A Tasty of luxury",
            title2: "FACECAP",
            image: img1,
        },
    ]
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        pauseOnFocus: true,
        pauseOnHover: true,
    }

    return (
        <section className='w-full relative flex  justify-center items-center bg-[var(--brandWhite)] dark:bg-[var(--brandBlack)]'>
            <div className='w-[90%] h-[85vh] mt-12 bg-gray-300 dark:bg-gray-300  shadow-lg rounded-3xl'>
                <Slider {...settings} className='w-full h-full rounded-4xl'>
                    {
                        HeroData.map((item) => (
                            <div key={item.id} className=''>
                                <div className='grid grid-cols-1 md:grid-cols-2 overflow-hidden'>
                                    <div className='flex flex-col justify-center items-start p-8 sm:p-8 '>
                                        <h3 className='text-[var(--brandBlack)] dark:text-[var(--brandWhite)] text-2xl font-semibold'>{item.subtitle}</h3>
                                        <h1 className='text-[var(--brandBlack)] dark:text-[var(--brandWhite)] text-3xl
                                       sm:text-7xl max-w-full opacity-80 font-bold'>{item.title}</h1>
                                        <h1 className='text-[var(--brandBlack)] dark:text-[var(--brandWhite)] text-[70px] sm:text-[150px] font-bold'>{item.title2}</h1>
                                        <button className='bg-[var(--brandBlack)] dark:bg-[var(--brandWhite)] text-[var(--brandWhite)] dark:text-[var(--brandBlack)] px-6 py-2 rounded-full sm:ml-4 hover:bg-[var(--brandWhite)] dark:hover:bg-[var(--brandBlack)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Order Now</button>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <img src={item.image} alt="hero" className='w-full h-[200px] sm:h-[500px] mr-8 sm:scale-105 lg:scale-110 object-contain drop-shadow-[-8px_4px_6x_rgba(0,0,0,.4)]  ' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default Home