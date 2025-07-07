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
    <section className='w-full bg-[var] fixed top-0 mx-auto px-4'>
      <div className='flex justify-center items-center border-1px border-primary'>
        <div className='flex justify-between items-center w-full max-w-7xl py-4'>
          <div className=' flex  text-[var(--brandIcon)] dark:text-[var(--brandIcon)]  cursor-pointer  space-x-10 '>
            <a className=' text-[var(--brandYellow)] dark-text-[var(--brandYellow)] text-2xl font-semibold' href="/">711-Tohon</a>
            <div className='hidden md:flex lg:flex  text-[var(--brandIcon)] dark:text-[var(--brandIcon)]  cursor-pointer  space-x-10 '>
              <a href="/" >Home</a>
              <a href="/shop" >Shop</a>
              <a href="/about" >About</a>
              <a href="/blog" >Blog</a>
              <a href='' className=' flex items-center justify-center'>Quick Link< FaCaretDown className='ml-2 animate' /></a>
            </div>
          </div>

          <div className='flex justify-center gap-3 items-center  mr-6'>
            <div className='hidden md:flex lg:flex  cursor-pointer transition ' >
              {click ? <input type="text" placeholder='Search' className='bee ' autoFocus onBlur={() => setClick(false)} /> : <FiSearch onClick={handleClick} className='relative w-12 text-[var(--brandIcon)] dark:text-[var(--brandIcon)]  cursor-pointer transition ease-in-out duration-300 hover:bg-[var(--brandWhite)] dark:hover:bg-[var(--brandBlack)]' />}
            </div>
            <div className='relative'>
              < FaCartShopping className='text-[var(--brandIcon)] dark:text-[var(--brandIcon)]  cursor-pointer transition ease-in-out duration-300 hover:bg-[var(--brandWhite)] dark:hover:bg-[var(--brandBlack)]' onClick={handleCartClick} />

              {showCart && (<div className='absolute top-16 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-64'>
                <h2 className='text-lg font-semibold text-left text-[var(--primary)] mb-2'>Order Now</h2>
                <form className='flex flex-col space-y-2'>
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