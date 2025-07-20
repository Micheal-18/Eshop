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
              <section className=" relative my-5 text-[var(--brandIcon)] mb-10 dark:text-[var(--brandWhite)]">
                    <div className='flex flex-col  justify-center items-center mb-4'>
                        <h1 className='font-bold text-2xl sm:text-4xl'>Recent News</h1>
                        <p className='text-sm'>Lorem ipsum  adipisicing elit.</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='grid grid-cols-1 sm:grid-cols-3 my-8 gap-2 mx-10 place-items-center '>
                            {data.map((News) => (
                                <div key={News.No} className='flex flex-col group'>
                                    {/*card*/}
                                    <div className=' rounded-md mx-auto p-4 flex justify-center items-center group'>
                                        <img src={News.image} alt='data' className='object-cover h-[180px] w-[260px] rounded-md' />
                                    </div>
                                    {/*product info */}
                                    <div className='leading-7'>
                                        <p className='font-semibold text-lg'>{News.published}</p>
                                        <h1 className='font-bold text-sm'>{News.title}</h1>
                                        <p className='text-sm text-gray-600 dark:text-gray-400'>{News.description}</p>
                                    </div>
                                </div>
    
                            ))}
                        </div>
                    </div>
                </section>
    
  )
}

export default Blog