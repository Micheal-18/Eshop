import React from 'react'
import tech from '../assets/technologia.jpg'
import gadget from '../assets/mac.png'
import iphone from '../assets/iphone.jpg'

const Blog = () => {

    const data = [
        {
            No: 1,
            title: "How to choose perfect smartphone",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatibus.",
            published: "October 1, 2023 by Jane Doe",
            image: iphone,
        },
        {
            No: 2,
            title: "How to choose perfect gadget",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatibus.",
            published: "October 2, 2023 by John Smith",
            image: gadget,
        },
        {   
            No: 3,
            title: "Latest trends in technology",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatibus.",
            published: "October 3, 2023 by Alice Johnson",
            image: tech,
        }
    ]

  return (
              <section className=" relative my-12 text-[var(--brandIcon)] mb-10 dark:text-[var(--brandWhite)]">
                    <div data-aos="fade-up" className='flex flex-col  justify-center items-center mb-4'>
                        <h1 className='font-bold text-2xl sm:text-4xl'>Recent News</h1>
                        <p className='text-sm'>Lorem ipsum elit.</p>
                    </div>
                    <div className='flex justify-center items-center mx-auto w-full max-w-6xl px-4'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 my-8  place-items-center '>
                            {data.map((News) => (
                                <div key={News.No} className='flex flex-col group'>
                                    {/*card*/}
                                    <div data-aos="fade-out" className='overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                                        <img src={News.image} alt='data' className='object-cover h-[220px] w-full hover:scale-105 duration-500 rounded-2xl' />
                                    </div>
                                    {/*content info */}
                                    <div className='space-y-2'>
                                        <p data-aos="fade-up"  className='text-xs text-gray-500'>{News.published}</p>
                                        <h1 data-aos="fade-up" className='font-bold line-clamp-1'>{News.title}</h1>
                                        <p data-aos="fade-up" className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{News.description}</p>
                                    </div>
                                </div>
    
                            ))}
                        </div>
                    </div>
                </section>
    
  )
}

export default Blog