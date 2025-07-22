import React from 'react'
import brandLogo from '../assets/techbrand.png'
import meLogo from '../assets/melogo.png'
import carbrand from '../assets/carbrand.png'

const Brand = () => {
  return (
    <section data-aos="fade-out" className="py-8 mt-24 hidden md:block bg-gray-400 dark:bg-white/10">
        <div className='grid grid-cols-5 gap-4 max-w-6xl mx-auto px-4'>
            <div>
                <img src={meLogo} alt='brand-logo' className='w-[80px] dark:invert' />
            </div>
            <div>
                <img src={carbrand} alt='brand-logo' className='w-[80px] dark:invert' />
            </div>
            <div>
                <img src={meLogo} alt='brand-logo' className='w-[80px] dark:invert' />
            </div>
            <div>
                <img src={brandLogo} alt='brand-logo' className='w-[80px] dark:invert' />
            </div>
            <div>
                <img src={meLogo} alt='brand-logo' className='w-[80px] dark:invert' />
            </div>
            
        </div>
    </section>
  )
}

export default Brand