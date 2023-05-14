import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../public/assets/profile.jpeg'

const About = () => {
  return (
    <div className=' bg-black'>
      <div className='container mx-auto px-4 pb-20 lg:pt-5'>
        <div className=' flex flex-wrap '>
          <div className='w-full md:w-5/12 px-4 pt-5 lg:pt-4 h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 md:pt-0'>
            <Image src={AboutImg} className='rounded-xl' alt='/' />
          </div>
          <div className='w-full md:w-7/12 md:pl-20 px-4 md:px-4 '>
            <div className='md:pr-12 pt-20'>
              <h5 className='uppercase text-xl tracking-widest text-[#145f9f]'>
                About Me
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
                <h4 className='py-2 text-gray-600 '>Previous Work</h4>
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
              <div class='block py-4'>
                <span class='text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  AWS Practitioner
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Comptia Network+
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Comptia Security+
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  CCNA
                </span>
              </div>
              <Link href='/#projects'>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                  Check out some of my latest projects.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
