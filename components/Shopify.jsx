import React from 'react'
import Image from 'next/image'
import Dams from '../public/assets/dams.png'
import Link from 'next/link'

const Shopify = () => {
  return (
    <>
      <div className='container items-center mx-auto px-4 pb-20  lg:pt-5'>
        <div className=' flex flex-wrap lg:flex-row-reverse '>
          <div className='w-full md:w-6/12 h-auto mt-5 mr-auto px-4 lg:pt-20 md:pt-0'>
            <Image
              alt='...'
              className='max-w-full rounded-lg shadow-xl'
              src={Dams}
            />
          </div>
          <div className='w-full md:w-6/12 md: px-4 md:px-4 '>
            <div className='md:pr-12 pt-20'>
              <h5 className='uppercase text-xl tracking-widest text-[#145f9f]'>
                Dams Arts
              </h5>
              <p className='py-2 text-gray-600'>
                I’m a former Sales Representative, Business owner, and world
                traveler looking to help people and companies solve complex and
                dynamic problems. Between my soft skills from working in the
                humanities and traveling to my technical skills in IT,
                programming, and networking there isn’t a problem I can’t
                solve!!
              </p>
              <div className='flex flex-col'>
                <h4 className='py-2 text-gray-600 '>Key Achievements</h4>
                <span className='py-1'>
                  Systems Design Engineer Intern: T-Mobile
                </span>
                <span className='py-1'>
                  IT Specialist: Chicago-Malcolm X College
                </span>
                <span className='py-1'>IT Support: DePaul University</span>
                <span className='py-1'>
                  Software Development Intern: STRUT Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shopify
