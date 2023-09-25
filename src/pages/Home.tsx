import React from 'react'
import 'tailwindcss/tailwind.css';
import Hero from '@/components/Hero'


type Props = {}

const index = (props: Props) => {
  return (
    <div className='bg-white'>
      <Hero/>
    </div>
  )
}

export default index