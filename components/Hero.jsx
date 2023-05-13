import Image from 'next/image'
import ProfileImage from '../public/assets/profile.jpeg'

const HeroSection = () => {
  return (
    <div className='relative pt-[100px] lg:pt-[150px] pb-[110px] bg-white'>
      <div className=' mr-auto ml-auto  md:px-12'>
        <div className='flex flex-wrap lg:flex-row-reverse px-4 md:px-4 xl:px-16 '>
          <div className='w-full lg:w-5/12 px-8 pb-12'>
            <div className='lg:text-right lg:ml-auto'>
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
          <div className='w-full lg:w-6/12 '>
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

              <p className='text-sm mb-8 text-body-color text-center lg:text-left max-w-[600px]'>
                I&#39;m passionate about enhancing brand identities, building
                unique websites, and making a positive impact to help ambitious
                businesses grow.
              </p>
              <div className='col-start-1 row-start-4 mt-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start'>
                <a
                  className='inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700'
                  href='#about'
                >
                  <span>
                    About Me
                    <span
                      aria-hidden='true'
                      className='hidden text-slate-400 sm:inline'
                    >
                      →
                    </span>
                  </span>
                </a>
                <a
                  className='inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-8 bg-slate-900 text-white hover:bg-slate-700'
                  href='https://github.com/BrandonMerry'
                >
                  <span>
                    Github
                    <span
                      aria-hidden='true'
                      className='hidden text-slate-400 sm:inline'
                    >
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
