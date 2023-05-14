import Image from 'next/image'
import ProfileImage from '../public/assets/profile.jpeg'
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/Io'
import { SiTailwindcss } from 'react-icons/Si'

const HeroSection = () => {
  return (
    <div className='relative pt-[100px] lg:pt-[150px] pb-[50px] bg-white'>
      <div className=' mr-auto ml-auto  md:px-12'>
        <div className='flex flex-wrap lg:flex-row-reverse px-4 md:px-4 xl:px-16  '>
          <div className='w-full lg:w-5/12 px-8 pb-12'>
            <div className='lg:text-right lg:ml-auto '>
              <div className='relative inline-block z-10 pt-10 lg:pt-0'>
                <Image
                  src={ProfileImage}
                  className='rounded-tl-3xl max-w-full lg:ml-auto'
                  alt='/'
                />

                <span class='absolute -left-8 -bottom-8 z-[-1]'>
                  <svg
                    width='93'
                    height='93'
                    viewBox='0 0 93 93'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='2.5' cy='2.5' r='2.5' fill='#2663bf' />
                    <circle cx='2.5' cy='24.5' r='2.5' fill='#2663bf' />
                    <circle cx='2.5' cy='46.5' r='2.5' fill='#2663bf' />
                    <circle cx='2.5' cy='68.5' r='2.5' fill='#2663bf' />
                    <circle cx='2.5' cy='90.5' r='2.5' fill='#2663bf' />
                    <circle cx='24.5' cy='2.5' r='2.5' fill='#2663bf' />
                    <circle cx='24.5' cy='24.5' r='2.5' fill='#2663bf' />
                    <circle cx='24.5' cy='46.5' r='2.5' fill='#2663bf' />
                    <circle cx='24.5' cy='68.5' r='2.5' fill='#2663bf' />
                    <circle cx='24.5' cy='90.5' r='2.5' fill='#2663bf' />
                    <circle cx='46.5' cy='2.5' r='2.5' fill='#2663bf' />
                    <circle cx='46.5' cy='24.5' r='2.5' fill='#2663bf' />
                    <circle cx='46.5' cy='46.5' r='2.5' fill='#2663bf' />
                    <circle cx='46.5' cy='68.5' r='2.5' fill='#2663bf' />
                    <circle cx='46.5' cy='90.5' r='2.5' fill='#2663bf' />
                    <circle cx='68.5' cy='2.5' r='2.5' fill='#2663bf' />
                    <circle cx='68.5' cy='24.5' r='2.5' fill='#2663bf' />
                    <circle cx='68.5' cy='46.5' r='2.5' fill='#2663bf' />
                    <circle cx='68.5' cy='68.5' r='2.5' fill='#2663bf' />
                    <circle cx='68.5' cy='90.5' r='2.5' fill='#2663bf' />
                    <circle cx='90.5' cy='2.5' r='2.5' fill='#2663bf' />
                    <circle cx='90.5' cy='24.5' r='2.5' fill='#2663bf' />
                    <circle cx='90.5' cy='46.5' r='2.5' fill='#2663bf' />
                    <circle cx='90.5' cy='68.5' r='2.5' fill='#2663bf' />
                    <circle cx='90.5' cy='90.5' r='2.5' fill='#2663bf' />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className='hidden lg:block lg:w-1/12 px-4'></div>
          <div className='w-full lg:w-6/12 lg:pt-10 '>
            <div className='hero-content text-center lg:text-left '>
              <h1
                className='text-dark
                font-bold
                text-4xl
                sm:text-2xl
                lg:text-3xl
                xl:text-4xl
                leading-snug
                mb-3
                md:pt-20'
              >
                Hello, I&#39;m <span className='text-[#2663bf]'> Brandon</span>
              </h1>
              <h1
                className='text-dark
                font-bold
                text-4xl
                sm:text-2xl
                lg:text-3xl
                xl:text-4xl
                leading-snug
                mb-6'
              >
                A Front-end Web Developer
              </h1>

              <p className='text-sm mb-8 mx-8 text-body-color text-center lg:text-left max-w-[450px]'>
                I&#39;m passionate about enhancing brand identities, building
                unique websites, and making a positive impact to help ambitious
                businesses grow.
              </p>
            </div>
            <div ClassName=' flex flex-wrap text-center lg:text-left'>
              <div className='w-full lg:w-6/12 text-center lg:text-left '>
                <div className='flex justify-center space-x-4 text-center  lg:text-left  max-w-[330px] m-auto py-2'>
                  <div className='flex flex-col items-center '>
                    <div className='rounded-full text-2xl shadow-lg  p-2 cursor-pointer hover:scale-110'>
                      <FaHtml5 />
                    </div>
                    <p className='pt-1  text-xs'>HTML</p>
                  </div>
                  <div className='flex flex-col items-center '>
                    <div className='rounded-full text-2xl shadow-lg  p-2 cursor-pointer hover:scale-110'>
                      <FaCss3Alt />
                    </div>
                    <p className='pt-1  text-xs'>CSS</p>
                  </div>
                  <div className='flex flex-col items-center '>
                    <div className='rounded-full text-2xl shadow-lg  p-2 cursor-pointer hover:scale-110'>
                      <IoLogoJavascript />
                    </div>
                    <p className='pt-1  text-xs'>JavaScript</p>
                  </div>
                  <div className='flex flex-col items-center '>
                    <div className='rounded-full text-2xl shadow-lg  p-2 cursor-pointer hover:scale-110'>
                      <FaReact />
                    </div>
                    <p className='pt-1  text-xs'>React</p>
                  </div>
                  <div className='flex flex-col items-center '>
                    <div className='rounded-full text-2xl shadow-lg  p-2 cursor-pointer hover:scale-110'>
                      <SiTailwindcss />
                    </div>
                    <p className='pt-1  text-xs'>Tailwind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
