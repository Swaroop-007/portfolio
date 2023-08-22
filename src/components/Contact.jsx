import React from 'react'
import {SiLinkedin,SiGmail} from 'react-icons/si'
const Contact = () => {
  return (
    <div className="md:px-10 px-7 h-full -mt-8  bg-[#ede8e871]" name="contact">
        <div className='flex justify-center items-center'>
                <h1 className="text-primary font-semibold text-3xl border-b-4 border-gray-600  ">Contact</h1>
        </div>
      <div className="flex flex-col md:flex-row">
       
        <div className="md:w-1/2">
        <h1 className="text-primary font-semibold text-2xl mt-16 mb-3">
        Get in touch with me:
      </h1>
    
      <div className="flex gap-1">
        <a href="https://www.linkedin.com/in/swaroop-pandurangi-65083715a/" target="_blank" rel="noreferrer">
          <SiLinkedin/>
        </a>
        
        <a className="ml-4" href="mailto:swarooppandurangi@gmail.com" target="_blank" rel="noreferrer">
        <SiGmail/>
        </a>
      </div>
        </div>
        <div className="md:w-1/2">
            <p className="mt-16 text-black text-2xl mb-6">Download my resume:   </p>
            <button className='text-black group border-2 px-6 py-4 font-bold my-2 flex items-center hover:bg-gray-300 hover:border-gray-300'>
                Resume
            </button>  
        </div>
      </div>
      <div className="text-black opacity-50  pb-2 ">
        <p>@ Copyright 2023 | Swaroop Pandurangi</p>
      </div>
    </div>
  )
}

export default Contact

/*

    */