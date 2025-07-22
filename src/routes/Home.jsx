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
import { FaCarSide } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import { FaHeadphones, FaWallet } from 'react-icons/fa6';
import Button from '../components/Button'; // adjust path as needed



const Home = ({handleCartClick}) => {

    const data = [
        {
            No: 1,
            title: "Headphone",
            image: img1,
            description: "Beat Headphone",
            price: "$99.99"
        },
        {
            No: 2,
            title: "Smartphone",
            image: img2,
            description: "Latest Smartphone",
            price: "$699.99"
        },
        {
            No: 3,
            title: "Smartwatch",
            image: img3,
            description: "Smartwatch",
            price: "$199.99"
        },
        {
            No: 4,
            title: "console",
            image: img4,
            description: "Gaming Console",
            price: "$99.99"
        },
        {
            No: 5,
            title: "Laptop",
            image: img5,
            description: "Gaming Laptop",
            price: "$999.99"
        },
        {
            No: 6,
            title: "Speaker",
            image: img6,
            description: "Bluetooth Speaker",
            price: "$49.99"
        },
        {
            No: 7,
            title: "Camera",
            image: img7,
            description: "Digital Camera",
            price: "$499.99"
        },
        {
            No: 8,
            title: "Tablet",
            image: img8,
            description: "Latest Tablet",
            price: "$299.99"
        }
    ]

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
                <div className='w-[95%] h-[70vh] md:h-[85vh] mt-16 bg-gradient-to-br from-gray-200 to-gray-300  dark:bg-gradient-to-br from-gray-200 to-gray-400   shadow-lg rounded-3xl'>
                    <Slider {...settings} className='w-full h-full rounded-4xl'>
                        {
                            HeroData.map((item) => (
                                <div key={item.id} className=''>
                                    <div className='grid grid-cols-2 md:grid-cols-2 overflow-hidden'>
                                        <div className='flex flex-col justify-center items-start px-4 py-8 sm:p-8 '>
                                            <p data-aos="fade-up" className='text-[var(--brandBlack)] dark:text-[var(--brandWhite)] text-2xl font-semibold'>{item.subtitle}</p>
                                            <h1 data-aos="fade-up" className='text-[var(--brandBlack)] dark:text-[var(--brandWhite)] text-3xl
                                       sm:text-7xl max-w-full opacity-80 font-bold'>{item.title}</h1>
                                            <h1 data-aos="fade-up" className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-[70px] sm:text-[100px] md:text-[150px] font-bold'>{item.title2}</h1>
                                            <button data-aos='fade-up' data-aos-offset="0" className='bg-[var(--brandBlack)] dark:bg-[var(--brandWhite)] text-[var(--brandWhite)] dark:text-[var(--brandBlack)] px-2 md:px-6 py-2 rounded-full ml-0 sm:ml-4 hover:bg-[var(--brandWhite)] dark:hover:bg-[var(--brandBlack)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'onClick={handleCartClick}>Shop By Cartegory</button>
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <img data-aos="zoom-in" src={item.image} alt="hero"  className=' w-full h-[150px] md:h-[500px] mr-8 sm:scale-105 lg:scale-110 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]  ' />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </section>

            <section className='w-full my-5 relative mt-8 flex justify-center items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-2 sm:mx-10 gap-4 sm:gap-8  overflow-hidden'>
                    <div data-aos="zoom-out" className='flex items-end relative px-4 h-[300px] shrink-0 bg-gradient-to-br from-gray-300 to-gray-400   rounded-3xl'>
                        <div className='mb-4 pr-20 sm:pr-0 '>
                            <div className=' '>
                                <h3 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-lg font-semibold'>Enjoy</h3>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-2xl
                                       sm:text-3xl opacity-80 font-bold'>With</h1>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-[30px] md:text-[60px] opacity-70 font-bold'>Earphone</h1>
                                <button className='bg-[var(--brandWhite)] dark:bg-[var(--brandWhite)] text-[var(--brandIcon)] dark:text-[var(--brandBlack)] px-2 md:px-6 cursor-pointer py-2 rounded-full sm:ml-4 hover:bg-[var(--brandYellow)] dark:hover:bg-[var(--brandBlack)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Browser</button>
                            </div>

                            <img src={img7} alt='secpic' className='w-[200px]  absolute lg:-right-4 left-5 top-10 lg:top-[40px]  object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] hover:scale-105 duration-500' />

                        </div>
                    </div>
                    <div data-aos="zoom-out"  className='flex items-end relative px-4 h-[300px] bg-gradient-to-br from-yellow-400 to-yellow-400/90 rounded-3xl'>
                        <div className='mb-4 pr-10 '>

                            <div className=" ">
                                <h3 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-lg font-semibold'>Enjoy</h3>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-2xl
                                       sm:text-3xl opacity-80 font-bold'>With</h1>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-[30px] md:text-[60px] opacity-20 font-bold'>Gadgets</h1>
                                <span className='bg-[var(--brandWhite)] dark:bg-[var(--brandWhite)] cursor-pointer  text-[var(--brandIcon)] dark:text-[var(--brandBlack)] px-2 md:px-6 py-2 rounded-full sm:ml-4 hover:bg-[var(--primary)] dark:hover:bg-[var(--brandIcon)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Browser</span>
                            </div>
                        </div>
                        <img src={img9} alt="secpic" className="w-[200px] absolute -right-4 lg:top-[40px] sm:scale-100 lg:scale-110 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] hover:scale-105 duration-500" />
                    </div>
                    <div data-aos="zoom-out"  className='flex items-end col-span-2 relative py-10 pl-5  h-[300px] bg-gradient-to-br from-red-600 to-red-600/90   rounded-3xl'>
                        <div className='mb-4'>
                            <div className=''>
                                <h3 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-lg font-semibold'>Enjoy</h3>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-2xl
                                       sm:text-3xl opacity-80 font-bold'>With</h1>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-[30px] md:text-[60px] opacity-20 font-bold'>Laptop</h1>
                                <span className='bg-[var(--brandWhite)] dark:bg-[var(--brandWhite)] cursor-pointer  text-[var(--brandIcon)] dark:text-[var(--brandBlack)] px-2 md:px-6 py-2 rounded-full sm:ml-4 hover:bg-[var(--brandYellow)] dark:hover:bg-[var(--brandBlack)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Browser</span>
                            </div>

                            <img src={img4} alt='secpic' className='w-[320px] absolute -right-4 top-1/2 -translate-y-1/2 sm:scale-100 lg:scale-110 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] hover:scale-105 duration-500' />

                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full my-5 relative flex justify-center items-center '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-2 sm:mx-10 gap-4 sm:gap-8 overflow-hidden'>
                    <div data-aos="zoom-out"  className='flex col-span-2 items-end relative py-10 pl-5  h-[300px] bg-gradient-to-br from-gray-200 to-gray-400  shrink rounded-3xl'>
                        <div className='mb-4'>
                            <div className=''>
                                <h3 className='text-[var(--brandIcon)] text-lg font-semibold'>Enjoy</h3>
                                <h1 className='text-[var(--brandIcon)] dark:text-[var(--brandWhite)] text-2xl
                                       sm:text-3xl opacity-80 font-bold'>With</h1>
                                <h1 className='text-white dark:text-[var(--brandWhite)] text-[30px] md:text-[60px] opacity-30 font-bold'>Console</h1>
                                <button className='bg-[var(--brandWhite)] dark:bg-[var(--brandWhite)] text-[var(--brandIcon)] dark:text-[var(--brandBlack)] px-2 md:px-6 cursor-pointer py-2 rounded-full sm:ml-4 hover:bg-[var(--brandYellow)] dark:hover:bg-[var(--brandBlack)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Browser</button>
                            </div>

                            <img src={img6} alt='secpic' className='w-[300px] absolute -right-4 top-1/2 -translate-y-1/2 sm:scale-100 lg:scale-110 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] hover:scale-105 duration-500' />

                        </div>
                    </div>
                    <div data-aos="zoom-out"  className='flex items-start relative px-4  md:h-[300px] bg-gradient-to-br from-green-400 to-green-400/90  rounded-3xl'>
                        <div className='mb-4 pr-20 sm:pr-0 my-4'>
                            <div className=''>
                                <h3 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-lg font-semibold'>Enjoy</h3>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-2xl
                                       sm:text-3xl opacity-80 font-bold'>With</h1>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-[30px] md:text-[60px] opacity-20 font-bold'>Occulus</h1>
                                <span className='bg-[var(--brandWhite)] dark:bg-[var(--brandWhite)] text-[var(--brandIcon)] dark:text-[var(--brandBlack)] px-2 md:px-6 py-2 rounded-full  cursor-pointer  sm:ml-4 hover:bg-[var(--brandYellow)] dark:hover:bg-[var(--brandBlack)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Browser</span>
                            </div>
                            <div className='flex'>
                                <img src={img8} alt='secpic' className='w-[200px] absolute bottom-2 right-0 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] hover:scale-105 duration-500' />
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-out"  className='flex items-start relative px-4 h-[300px] bg-gradient-to-br from-blue-400 to-blue-400/90  rounded-3xl'>
                        <div className='my-4 mb-4 pr-10 sm:pr-0 '>
                            <div className=''>
                                <h3 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-lg font-semibold'>Enjoy</h3>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-2xl
                                       sm:text-3xl opacity-80 font-bold'>With</h1>
                                <h1 className='text-[var(--brandWhite)] dark:text-[var(--brandWhite)] text-[30px] md:text-[60px] opacity-20 font-bold'>Speakers</h1>
                                <span className='bg-[var(--brandWhite)] dark:bg-[var(--brandWhite)] text-[var(--brandIcon)] dark:text-[var(--brandBlack)] px-2 md:px-6 py-2 rounded-full  cursor-pointer  sm:ml-4 hover:bg-[var(--brandYellow)] dark:hover:bg-[var(--brandBlack)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Browser</span>
                            </div>

                            <img src={img5} alt='secpic' className='w-[200px] absolute bottom-0 right-0 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] hover:scale-105 duration-500' />

                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up"  className="grid grid-cols-2 gap-4 lg:grid-cols-4 m-10  overflow-hidden">
                <div className="flex flex-1 gap-2 items-center flex-row">
                    <FaCarSide className='text-2xl text-[var(--primary)]' />
                    <div>
                        <h1 className="text-[var(--brandIcon)] dark:text-[var(--brandWhite)] text-sm md:text-2xl font-semibold">Shop By Cartegory</h1>
                        <p className="text-[var(--brandIcon)] dark:text-[var(--brandWhite)] text-xs md:text-lg opacity-90 ">Free Shiping on all order</p>
                    </div>
                </div>
                <div className="flex flex-1 gap-2 items-center flex-row">
                    <FiCheckCircle className='text-2xl text-[var(--primary)]' />
                    <div>
                        <h1 className="text-[var(--brandIcon)] dark:text-[var(--brandWhite)] text-sm md:text-2xl font-semibold">Shop By Cartegory</h1>
                        <p className="text-[var(--brandIcon)] dark:text-[var(--brandWhite)] text-xs md:text-lg opacity-90 ">Free Shiping on all order</p>
                    </div>
                </div>
                <div className="flex flex-1 gap-2 items-center flex-row">
                    <FaHeadphones className='text-2xl text-[var(--primary)]' />
                    <div>
                        <h1 className="text-[var(--brandIcon)] dark:text-[var(--brandWhite)] text-sm md:text-2xl font-semibold">Shop By Cartegory</h1>
                        <p className="text-[var(--brandIcon)] dark:text-[var(--brandWhite)] text-xs md:text-lg opacity-90 ">Free Shiping on all order</p>
                    </div>
                </div>
                <div className="flex flex-1 gap-2 items-center flex-row">
                    <FaWallet className='text-2xl text-[var(--primary)]' />
                    <div>
                        <h1 className="text-[var(--brandIcon)] dark:text-[var(--brandWhite)] text-sm md:text-2xl font-semibold">Shop By Cartegory</h1>
                        <p className="text-[var(--brandIcon)] dark:text-[var(--brandWhite)] text-xs md:text-lg opacity-90 ">Free Shiping on all order</p>
                    </div>
                </div>
            </section>

            {/* Discount */}

            <section className="min-h-[500px] relative flex justify-center items-center px-2 py-12">
                <div className=" bg-gradient-to-br from-red-500 to-red-700  dark:bg-gradient-to-br from-red-700 to-red-500  shadow-lg rounded-3xl">
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-[var(--brandWhite)] dark:text-[var(--brandWhite)] overflow-hidden'>
                        <div className='  p-6 sm:p-8 '>
                            <p data-aos="fade-up" className=' text-sm '>30% OFF</p>
                            <h1 data-aos="slide-right" className=' uppercase  text-4xl
                                       lg:text-7xl  font-bold'>Fine Smile</h1>
                            <p data-aos="fade-up" className='text-sm'>10 Jan to 28 Jan</p>
                        </div>
                        <div className=' h-full flex items-center'>
                            <img data-aos="zoom-in" src={img1} alt="hero" className='absolute w-[250px] md:w-[340px] mx-auto object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] scale-110 md:scale-125 ' />
                        </div>
                        <div className='flex flex-col justify-center gap-4 p-8 sm:p-8 '>
                            <p data-aos="fade-up" className=' text-lg font-bold'>Air Solo Bass</p>
                            <p data-aos="slide-left" className='text-3xl md:text-5xl
                                       sm:text-3xl font-bold'>Winter Sale</p>
                            <p data-aos="fade-up" className=' text-sm tracking-wide leading-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <span data-aos="fade-up" data-aos-offset="0" className='bg-[var(--brandWhite)] text-center dark:bg-[var(--brandWhite)] text-[var(--brandIcon)] dark:text-[var(--brandBlack)] py-2 rounded-full hover:bg-[var(--primary)] dark:hover:bg-[var(--brandIcon)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Shop Now</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product section */}


            <section className=" relative my-5 text-[var(--brandIcon)] mb-10 dark:text-[var(--brandWhite)]">
                <div data-aos="fade-out" className='flex flex-col  justify-center items-center mb-4'>
                    <h1   className='font-bold text-3xl sm:text-4xl'>Best Seller Product</h1>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 my-8 lg:grid-cols-4 gap-8 mx-10 place-items-center '>
                        {data.map((data) => (
                            <div key={data.No} className='flex flex-col group'>
                                {/*card*/}
                                <div data-aos="fade-up" className='relative bg-gray-200 h-[200px] rounded-md shadow-md mx-auto p-4 flex justify-center items-center group'>
                                    <img src={data.image} alt='data' className='object-cover h-[180px] w-[260px] rounded-md' />
                                    <div className='hidden group-hover:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-md
                            justify-center items-center group-hover:backdrop-blur-sm transition duration-300'>
                                        <Button
                                            text={"Add to cart"}
                                            bgColor={'bg-[var(--primary)]'}
                                            textColor={"text-white"}
                                            onClick={handleCartClick}
                                        />
                                    </div>
                                </div>
                                {/*product info */}
                                <div data-aos="fade-out" className='leading-7'>
                                    <h1 className='font-semibold text-lg'>{data.description}</h1>
                                    <p className='font-bold text-sm'>{data.price}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

            {/* Discount 2 */}

            <section className="min-h-[500px] relative flex justify-center items-center px-2 py-12">
                <div className=" bg-gradient-to-br from-green-500 to-green-700  dark:bg-gradient-to-br from-green-700 to-green-500  shadow-lg rounded-3xl">
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-[var(--brandWhite)] dark:text-[var(--brandWhite)] overflow-hidden'>
                        <div className='  p-6 sm:p-8 '>
                            <p data-aos="fade-up" className=' text-sm '>30% OFF</p>
                            <h1 data-aos="slide-right" className=' uppercase  text-4xl
                                       lg:text-7xl  font-bold'>happy hours</h1>
                            <p data-aos="fade-up" className='text-sm'>10 Jan to 28 Jan</p>
                        </div>
                        <div className=' h-full flex items-center'>
                            <img data-aos="zoom-in" src={img9} alt="hero" className='absolute w-[250px] md:w-[340px] mx-auto object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] scale-110 md:scale-125 ' />
                        </div>
                        <div className='flex flex-col justify-center gap-4 p-8 sm:p-8 '>
                            <p data-aos="fade-up" className=' text-lg font-bold'>Air Solo Bass</p>
                            <p data-aos="slide-left" className='text-3xl md:text-5xl
                                       sm:text-3xl font-bold'>Winter Sale</p>
                            <p data-aos="fade-up" className=' text-sm tracking-wide leading-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <span data-aos="fade-up" data-aos-offset="0" className='bg-[var(--brandWhite)] text-center dark:bg-[var(--brandWhite)] text-[var(--brandIcon)] dark:text-[var(--brandBlack)] py-2 rounded-full hover:bg-[var(--primary)] dark:hover:bg-[var(--brandIcon)] hover:text-[var(--brandBlack)] dark:hover:text-[var(--brandWhite)] transition-all duration-300'>Shop Now</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home