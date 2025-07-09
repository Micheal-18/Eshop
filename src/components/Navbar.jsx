import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { FaCartShopping } from 'react-icons/fa6'
import Darkmode from './Darkmode'

const Navbar = () => {

  const [click, setClick] = React.useState(false);
  const [showCart, setShowCart] = React.useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  }

  const handleClick = () => {
    setClick(!click);
  }

  return (
    <section className='w-full bg-[var] relative h-5 z-50 mx-auto px-4'>
      <div className='fixed w-full top-0  border-1px border-primary'>
        <div className='flex justify-between items-center w-full py-4'>
          <div className=' flex  text-[var(--brandIcon)] dark:text-[var(--brandIcon)]  cursor-pointer  space-x-10 '>
            <a className=' text-[var(--primary)] dark-text-[var(--primary)] text-2xl font-semibold' href="/">ESHOP</a>
            <div className='hidden md:flex lg:flex  text-[var(--brandIcon)] dark:text-[var(--brandIcon)]  cursor-pointer  space-x-10 '>
              <a href="/" >Home</a>
              <a href="/shop" >Shop</a>
              <a href="/about" >About</a>
              <a href="/blog" >Blog</a>
              <li className=' list-none cursor-pointer outline-none  group'>
                <a href='' className=' flex items-center justify-center'>Quick Link< FaCaretDown className='ml-2 animate' /></a>

                <div className='fixed z-50 hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 transition ease-in-out p-2 text-black'>
                  <ul className='space-y-2'>
                    <li className='flex flex-col space-y-2 text-gray-500 hover:text-black dark:hover:text-white duration-700 w-full'>
                      <a href=''>Trending Fits</a>
                      <a href=''>Latest Fits</a>
                      <a href=''>Top Rated</a>
                    </li>
                  </ul>
                </div>
              </li>
            </div>
          </div>

          <div className='flex justify-center gap-3 items-center  mr-6'>
            <div className='hidden md:flex lg:flex  cursor-pointer transition ' >
              {click ? <input type="text" placeholder='Search' className='bee ' autoFocus onBlur={() => setClick(false)} /> : <FiSearch onClick={handleClick} className='relative w-12 text-[var(--brandIcon)] dark:text-[var(--brandIcon)]  cursor-pointer transition ease-in-out duration-300 hover:bg-[var(--brandWhite)] dark:hover:bg-[var(--brandBlack)]' />}
            </div>
            <div className='relative'>
              < FaCartShopping className='text-[var(--brandIcon)] dark:text-[var(--brandIcon)]  cursor-pointer transition ease-in-out duration-300 hover:bg-[var(--brandWhite)] dark:hover:bg-[var(--brandBlack)]' onClick={handleCartClick} />
              {showCart && (<div className='fixed top-16 right-4 z-50  bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 scale:120  w-64'>
                <h2 className='text-lg font-semibold text-left text-[var(--primary)] mb-2'>Order Now</h2>
                <form className='flex z-50  flex-col space-y-2'>
                  <input type="text" placeholder='Name' className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]' />
                  <input type="email" placeholder='Email' className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]' />
                  <input type="text" placeholder='Address' className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]' />
                </form>
                <button className='mt-4 px-4 py-2 rounded-lg '>Order Now</button>
              </div>
            )}
            </div>
            <Darkmode />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar