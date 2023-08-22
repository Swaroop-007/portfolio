import React from 'react'
import {FcNext} from 'react-icons/fc'
import {Link} from 'react-scroll'
const Main = () => {
  return (
    <div name='main' className='w-full h-screen bg-[#ede8e871]'>
      {/* Container */} 
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        
        <h1 className='text-4xl sm:text-7xl font-bold text-green-500'>
          HELLO!
        </h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#3f455a]'>
          I'm <span style={{color:"#4560c1"}}>Swaroop</span>, a full stack developer based in Bengaluru.
        </h2>
        <div>
          <button className='text-black group border-2 px-6 py-4 font-bold my-2 flex items-center hover:bg-gray-300 hover:border-gray-300'>
            <Link to="about" duration={500}>A little about me</Link>
            <span className='group-hover:rotate-90 duration-300'>
              <FcNext className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main