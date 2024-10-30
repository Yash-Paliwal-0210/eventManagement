import React from 'react'
import { Button } from "@/components/ui/button"
import Banner from './Banner'

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex justify-between xl:px-36 xl:pt-7 xl:pb-4 w-full px-14 py-4 items-center'>
        <div className='md:text-3xl text-xl font-bold'> Event <span className='text-purple-500'>Hive</span></div>
        <div>
        <Button variant="secondary">Login</Button>
        <Button className='bg-purple-500 '>Signup</Button>
        </div>
      </div>

      <Banner/>
    </div>
  )
}

export default HomePage
