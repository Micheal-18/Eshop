import React from 'react'
import img1 from "../assets/bgcover.png";

const Home = () => {
    return (
        <section className='w-full h-screen flex  justify-center items-center bg-[var(--brandWhite)] dark:bg-[var(--brandBlack)]'>
            <div className='w-[90%] h-[70vh] flex flex-col justify-center items-center bg-gray-300 dark:bg-gray-300  shadow-lg rounded-4xl'>
                <div className='flex flex-col md:flex-row  justify-between items-center'>
                    <div className='text-left md:text-left mb-2 md:mb-0'>
                        <h1 className='text-6xl md:text-7xl font-bold text-[var(--brandYellow)] dark:text-[var(--brandYellow)] z-20'>A Taste Of Luxury</h1>
                        <p className='text-lg font-semibold text-[#0d1117] z-20'>711-Tohon</p>
                    </div>
                    <div>
                        <img src={img1} alt="Cover" className='w-auto h-[40vh] md:h-[80vh] object-contain rounded-2xl mt-6' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home