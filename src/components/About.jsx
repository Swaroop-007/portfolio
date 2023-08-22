import React from 'react'
import {FcNext} from 'react-icons/fc'
import {Link} from 'react-scroll'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#ede8e871] text-black-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-600'>
              About me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Hi, I'm Swaroop Pandurangi, a developer based in Bengaluru with a passion for
                 developing Full-Stack Applications using React js and Node js.

              </p>
            </div>
            <div>
              <p>With 2+ years of experience in IT industry, I started my journey with python,
                  then went on to explore many technologies such as  C#, .Net, D365, Node js,
                  React js etc.
                  <br/>
                  <br/>
                  To get in touch or more info about me or my professional experience:
              </p>

              <button className='text-black group border-2 px-6 py-4 font-bold my-2 flex items-center hover:bg-gray-300 hover:border-gray-300'>
                <Link to="contact" duration={500}>Contact</Link>
                <span className='group-hover:rotate-90 duration-300'>
                  <FcNext className='ml-3 ' />
                  </span>
              </button>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
