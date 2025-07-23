import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { FiSearch, FiX } from 'react-icons/fi'
import { FaCartShopping } from 'react-icons/fa6'
import Darkmode from './Darkmode'

const Navbar = ({handleCartClick, showCart, setShowCart}) => {

  const [click, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  return (
    <section className='w-full  relative h-5 z-50 mx-auto px-4'>
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

                <div className='fixed z-50 hidden group-hover:block w-[200px] rounded-md bg-[var(--brandWhite)]  dark:bg-[var(--brandWhite)] shadow-md dark:bg-gray-900 transition ease-in-out p-2 text-[var(--brandIcon)] text-[var(--brandIcon)]'>
                  <ul className='space-y-2'>
                    <li className='flex flex-col space-y-2 text-gray-500 dark:hover:text-white duration-700 w-full'>
                      <a href='' className='hover:bg-[var(--brandIcon)] rounded-sm'>Trending Fits</a>
                      <a href='' className='hover:bg-[var(--brandIcon)] rounded-sm'>Latest Fits</a>
                      <a href='' className='hover:bg-[var(--brandIcon)] rounded-sm'>Top Rated</a>
                    </li>
                  </ul>
                </div>
              </li>
            </div>
          </div>

          <div className='flex justify-center gap-3 items-center  mr-6'>
            <div className='hidden md:flex lg:flex  cursor-pointer transition ' >
              {click ? <input type="text" placeholder='Search' className='bee ' autoFocus onBlur={() => setClick(false)}  /> : <FiSearch onClick={handleClick} className='relative w-12 text-[var(--brandIcon)] dark:text-[var(--brandIcon)]  cursor-pointer transition ease-in-out duration-300' />}
            </div>
            <div className='relative'>
              < FaCartShopping className='text-[var(--brandIcon)] dark:text-[var(--brandIcon)]  cursor-pointer transition ease-in-out duration-300  rounded-full hover:bg-[var(--brandWhite)] dark:hover:bg-[var(--brandWhite)]' onClick={handleCartClick} />
              <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute -top-4 -right-3 flex items-center justify-center text-xs'>4</div>
              {showCart && (<div className='fixed inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-sm' >
                <div className='absolute z-50  bg-[var(--brandWhite)] dark:bg-[var(--brandWhite)]  shadow-lg rounded-lg p-4 scale:110  w-64'>
                <div className='flex justify-between'>
                  <h2 className='text-lg font-semibold text-left text-[var(--primary)] mb-2'>Order Now</h2>
                  <FiX className='text-2xl text-[var(--brandIcon)] dark:text-[var(--brandWhite)]'  onClick={() => setShowCart(false)}/>
                </div>
                <form className='flex z-50 text-[var(--brandIcon)] dark:text-[var(--brandIcon)]  flex-col space-y-2'>
                  <input type="text" placeholder='Name' className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]' />
                  <input type="email" placeholder='Email' className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]' />
                  <input type="text" placeholder='Address' className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]' />
                </form>
                <button className='mt-4 px-4 py-2 rounded-lg '>Order Now</button>
              </div>
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