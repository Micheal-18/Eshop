import React from 'react'
import Slider from 'react-slick';
import img1 from "../assets/headphone.png";
import img2 from "../assets/bgcover.png";
import img3 from "../assets/smiley.png";
import img4 from "../assets/laptop.png"



const Home = () => {

    const HeroData = [
        {
            id: 1,
            subtitle: "Beat solo",
            title: "Wireless",
            title2: "Headphone",
            image: img1,
        },
        {
            id: 2,
            subtitle: "4D Display",
            title: "Reality",
            title2: "Vitual",
            image: img3,
        },
        {
            id: 3,
            subtitle: "8th Gen",
            title: "Laptop",
            title2: "EliteBook",
            image: img4,
        }
    ]
    const settings = {
        dots: true,
        arrows: true,
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
        <>
                <section className='w-full relative flex flex-cols justify-center items-center bg-[var(--brandWhite)] dark:bg-[var(--brandBlack)]'>
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
                                        <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-[50px] md:text-[150px] font-bold'>{item.title2}</h1>
                                        <button className='bg-[var(--brandBlack)] dark:bg-[var(--brandWhite)] text-[var(--brandWhite)] dark:text-[var(--brandBlack)] px-6 py-2 rounded-full sm:ml-4 hover:bg-[var(--brandWhite)] dark:hover:bg-[var(--brandBlack)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Shop By Cartegory</button>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <img src={item.image} alt="hero" className='w-full h-[150px] md:h-[500px] mr-8 sm:scale-105 lg:scale-110 object-contain drop-shadow-[-8px_4px_6x_rgba(0,0,0,.4)]  ' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>

         <section className='w-full relative mt-20 flex justify-center items-center bg-[var(--brandWhite)] dark:bg-[var(--brandBlack)]'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 overflow-hidden'>
                <div className='w-[250px] p-4 h-[250px] flex-none bg-[var(--brandIcon)] border rounded-md'>
                    <div className='flex  justify-between items-center h-full'>
                        <div>
                            <h1 className='text-[var(--brandBlack)] dark:text-[var(--brandWhite)] text-2xl font-semibold'>Gadgets</h1>
                        <button className='rounded-md p-2 '>Buy now</button>
                        </div>
                        <img src={img2} alt='secpic' className='object-contain w-[100px] h-[100px]'/>
                    </div>
                </div>
                <div className='w-[250px] p-4 h-[250px] flex-none bg-[var(--brandYellow)] border rounded-md'>
                    <div className='flex flex-col gap-4 items-center h-full'>
                        <img src={img3} alt='secpic' className='object-contain w-[100px] h-[100px]'/>
                        <div>
                            <h1 className='text-[var(--brandBlack)] dark:text-[var(--brandWhite)] text-2xl font-semibold'>Gadgets</h1>
                        <button className='rounded-md p-2 bg-[var(--brandWhite)]'>Buy now</button>
                        </div>
                    </div>
                </div>
                <div className='w-[300px] p-4 h-[250px] grow bg-[var(--primary)] border rounded-md'>
                    <div className='flex  justify-between items-center h-full'>
                        <div>
                            <h1 className='text-[var(--brandBlack)] dark:text-[var(--brandWhite)] text-2xl font-semibold'>Gadgets</h1>
                        <button className='rounded-md p-2 '>Buy now</button>
                        </div>
                        <img src={img4} alt='secpic' className='object-contain w-[100px] h-[100px]'/>
                    </div>
                </div>
         </div>
         </section>
        </>
    )
}

export default Home