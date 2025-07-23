import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


const Footer = () => {


    const data = [
        {
            link: "/",
            text: "Home"
        },
        {
            link: "/about",
            text: "About"
        },
        {
            link: "/contact",
            text: "Contact"
        },
        {
            link: "/Blog",
            text: "Blog"
        }
    ]

    return (
        <footer data-aos="fade-up" className="text-[var(--brandIcon)] mb-10 dark:text-[var(--brandWhite)] py-6">
            <div className="max-w-6xl mx-auto p-4">
                <div className='grid sm:grid-cols-3 md:grid-cols-4 pb-20 pt-5'>
                    <div className='py-8 px-4'>
                        <a className=' text-[var(--primary)] dark-text-[var(--primary)] text-2xl font-semibold' href="/">ESHOP</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam rem fugiat maiores beatae.</p>
                        <p>Clone with 💖 by a React dev  </p>
                        <a href='https://www.youtube.com' target='blank' className='inline-block hover:bg-[var(--brandIcon)] bg-[var(--primary)] text-white py-2 px-4 mt-4 text-sm rounded-full'>Visit our YouTube Channel</a>
                    </div>
                    {/* Links Section */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h3 className='mb-4 text-xl font-bold'>Important Links</h3>
                            <ul className='space-y-2'>
                                {data.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.link} className='hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-colors duration-300'>{item.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='py-8 px-4'>
                            <h3 className='mb-4 text-xl font-bold'>Quick Links</h3>
                            <ul className='space-y-2'>
                                {data.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.link} className='hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-colors duration-300'>{item.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='col-spans-2 sm:col-auto py-8 px-4'>
                        <h3 className='mb-4 text-xl sm:text-left font-bold'>Address</h3>
                        <div>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>Off Ubolo Str, Nsukka </p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaMobileAlt />
                                <p>+2348143409159</p>
                            </div>
                        </div>
                        <div className='flex items-center mt-6 gap-3'>
                            <a href='#'>
                                <FaInstagram className='text-3xl hover:text-[var(--primary)] hover:scale-105 duration-300' /></a>
                            <a>
                                <FaXTwitter className='text-3xl hover:text-[var(--primary)] hover:scale-105 duration-300' />
                            </a>
                            <a>
                                <FaFacebook className='text-3xl hover:text-[var(--primary)] hover:scale-105 duration-300' />
                            </a>
                            <a>
                                <FaLinkedin className='text-3xl hover:text-[var(--primary)] hover:scale-105 duration-300' />
                            </a>


                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer