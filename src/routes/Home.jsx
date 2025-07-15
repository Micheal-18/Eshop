import React from 'react'
import Slider from 'react-slick';
import img1 from "../assets/headphone.png"
import img2 from "../assets/bgcover.png"
import img3 from "../assets/smiley.png"
import img4 from "../assets/laptop.png"
import img5 from "../assets/mp3.png"
import img6 from "../assets/p5.png"
import img7 from "../assets/earpi.png"
import img8 from "../assets/waka.png"
import img9 from "../assets/phone.png"


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
            <section className='w-full relative flex flex-cols justify-center items-center'>
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
                                            <img src={item.image} alt="hero" className='w-full h-[150px] md:h-[500px] mr-8 sm:scale-105 lg:scale-110 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]  ' />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </section>

            <section className='w-full my-5 relative flex justify-center items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-10 gap-8  overflow-hidden'>
                    <div className='flex items-end relative px-4 h-[300px] shrink-0 bg-gradient-to-br from-gray-200 to-gray-300   rounded-3xl'>
                        <div className='mb-4'>
                            <div className=' '>
                                <h3 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-lg font-semibold'>Enjoy</h3>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-2xl
                                       sm:text-3xl opacity-80 font-bold'>With</h1>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-[30px] md:text-[60px] opacity-20 font-bold'>Earphone</h1>
                                <span className='bg-[var(--primary)] dark:bg-[var(--brandWhite)] text-[var(--brandIcon)] dark:text-[var(--brandYellow)] px-2 cursor-pointer md:px-6 py-2 rounded-full sm:ml-4 hover:bg-[var(--brandWhite)] dark:hover:bg-[var(--brandBlack)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Browser</span>
                            </div>
                            
                                <img src={img7} alt='secpic' className='w-[200px]  absolute lg:-right-4 left-5 top-10 lg:top-[40px]  object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]' />
                            
                        </div>
                    </div>
                    <div className='flex items-end relative px-4 h-[300px] bg-gradient-to-br from-yellow-400 to-yellow-400/90 rounded-3xl'>
                        <div className='mb-4'>

                            <div className=" ">
                                <h3 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-lg font-semibold'>Enjoy</h3>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-2xl
                                       sm:text-3xl opacity-80 font-bold'>With</h1>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-[30px] md:text-[60px] opacity-20 font-bold'>Gadgets</h1>
                                <span className='bg-[var(--brandWhite)] dark:bg-[var(--brandWhite)] cursor-pointer  text-[var(--brandIcon)] dark:text-[var(--brandBlack)] px-2 md:px-6 py-2 rounded-full sm:ml-4 hover:bg-[var(--primary)] dark:hover:bg-[var(--brandIcon)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Browser</span>
                            </div>
                        </div>
                        <img src={img9} alt="secpic" className="w-[200px] absolute -right-4 lg:top-[40px] sm:scale-100 lg:scale-110 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]" />
                    </div>
                    <div className='flex items-end col-span-2 relative py-10 pl-5  h-[300px] bg-gradient-to-br from-red-500 to-red-500/90   rounded-3xl'>
                        <div className='mb-4'>
                            <div className=''>
                                <h3 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-lg font-semibold'>Enjoy</h3>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-2xl
                                       sm:text-3xl opacity-80 font-bold'>With</h1>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-[30px] md:text-[60px] opacity-20 font-bold'>Laptop</h1>
                                <span className='bg-[var(--brandWhite)] dark:bg-[var(--brandWhite)] cursor-pointer  text-[var(--brandIcon)] dark:text-[var(--brandBlack)] px-2 md:px-6 py-2 rounded-full sm:ml-4 hover:bg-[var(--brandYellow)] dark:hover:bg-[var(--brandBlack)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Browser</span>
                            </div>

                            <img src={img4} alt='secpic' className='w-[320px] absolute -right-4 top-1/2 -translate-y-1/2 sm:scale-100 lg:scale-110 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]' />

                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full my-5 relative flex justify-center items-center '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-10 gap-8  overflow-hidden'>
                    <div className='flex col-span-2 items-end relative py-10 pl-5  h-[300px] bg-gradient-to-br from-gray-200 to-gray-400  shrink rounded-3xl'>
                        <div className=''>
                            <div className='mb-4'>
                                <h3 className='text-[var(--brandIcon)] text-lg font-semibold'>Enjoy</h3>
                                <h1 className='text-[var(--brandIcon)] dark:text-[var(--brandWhite)] text-2xl
                                       sm:text-3xl opacity-80 font-bold'>With</h1>
                                <h1 className='text-white dark:text-[var(--brandWhite)] text-[30px] md:text-[60px] opacity-30 font-bold'>Console</h1>
                                <button className='bg-[var(--brandWhite)] dark:bg-[var(--brandWhite)] text-[var(--brandIcon)] dark:text-[var(--brandBlack)] px-2 md:px-6 cursor-pointer py-2 rounded-full sm:ml-4 hover:bg-[var(--brandYellow)] dark:hover:bg-[var(--brandBlack)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Browser</button>
                            </div>

                            <img src={img6} alt='secpic' className='w-[300px] absolute -right-4 top-1/2 -translate-y-1/2 sm:scale-100 lg:scale-110 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]' />

                        </div>
                    </div>
                    <div className='flex items-start relative px-4  md:h-[300px] bg-gradient-to-br from-green-400 to-green-400/90  rounded-3xl'>
                        <div className='my-4'>
                            <div className=''>
                                <h3 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-lg font-semibold'>Enjoy</h3>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-2xl
                                       sm:text-3xl opacity-80 font-bold'>With</h1>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-[30px] md:text-[60px] opacity-20 font-bold'>Occulus</h1>
                                <span className='bg-[var(--brandWhite)] dark:bg-[var(--brandWhite)] text-[var(--brandIcon)] dark:text-[var(--brandBlack)] px-2 md:px-6 py-2 rounded-full  cursor-pointer  sm:ml-4 hover:bg-[var(--brandYellow)] dark:hover:bg-[var(--brandBlack)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Browser</span>
                            </div>
                            <div className='flex'>
                                <img src={img8} alt='secpic' className='w-[200px] absolute bottom-2 right-0 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]' />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-start relative px-4 h-[300px] bg-gradient-to-br from-blue-400 to-blue-400/90  rounded-3xl'>
                        <div className='my-4'>
                            <div className=''>
                                <h3 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-lg font-semibold'>Enjoy</h3>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-2xl
                                       sm:text-3xl opacity-80 font-bold'>With</h1>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-[30px] md:text-[60px] opacity-20 font-bold'>Speakers</h1>
                                <span className='bg-[var(--brandWhite)] dark:bg-[var(--brandWhite)] text-[var(--brandIcon)] dark:text-[var(--brandBlack)] px-2 md:px-6 py-2 rounded-full  cursor-pointer  sm:ml-4 hover:bg-[var(--brandYellow)] dark:hover:bg-[var(--brandBlack)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Browser</span>
                            </div>
                            
                                <img src={img5} alt='secpic' className='w-[200px] absolute bottom-0 right-0 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]' />
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home