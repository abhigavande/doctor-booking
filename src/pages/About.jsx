import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div >
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, at ipsum. Vero accusamus consequatur ut rem odio sed optio cumque, corrupti non dignissimos reiciendis ad a sequi repellat! Quisquam numquam corrupti magnam esse, impedit expedita quia obcaecati rem placeat doloribus in quas maxime at consectetur?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi ullam aperiam labore quae rerum asperiores praesentium dicta sequi magnam deserunt, debitis non nostrum voluptate in!</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod neque voluptatibus quos delectus, commodi optio tempora. Vero, delectus.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex felx-col md:flex-row mb-20'>
        <div className='border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat unde reprehenderit voluptas?</p>
        </div>

        <div className='border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convience:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem magni facere, repudiandae rerum debitis possimus?</p>
        </div>

        <div className='border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>

          <b>Personalization</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at ipsam quis debitis, rem pariatur.</p>
        </div>
      </div>

    </div>
  )
}

export default About
