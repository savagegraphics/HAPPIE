import React from 'react'
import 'tailwindcss/tailwind.css';
import Hero from '@/components/Hero'
import OurServices from '@/components/OurServices';


type Props = {}

const index = (props: Props) => {
  return (
    <div className='bg-white'>
      <Hero/>
      <OurServices/>
    </div>
  )
}

export default index