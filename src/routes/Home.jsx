import React from 'react'
import img1 from "../assets/bgcover.png";

const Home = () => {
    return (
        <section className='w-full h-screen flex  justify-center items-center bg-[var(--brandWhite)] dark:bg-[var(--brandBlack)]'>
            <div className='w-[90%] h-[85vh] mt-15 flex flex-col justify-center items-center bg-gray-300 dark:bg-gray-300  shadow-lg rounded-4xl'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div className='flex items-center text-center px-10 md:text-center text-7xl font-bold mb-2 md:mb-0'>

                        {/* <h1 className=''>Brand</h1>
                        <h2>711 Tohon</h2> */}
                        <div className='z-10 ml-50'><p className='font'>A Taste Of Luxury</p></div>
                          <div className='z-0 tracking-wider'><img src={img1} alt="Cover" className='w-auto flex h-[40vh] md:h-[80vh] object-cover mt-6' /></div>
                      
                    </div>
                
                    
                </div>
            </div>
        </section>
    )
}

export default Home