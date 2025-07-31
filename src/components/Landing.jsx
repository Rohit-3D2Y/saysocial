import React from 'react'
import HeroVid from './utils/HeroVid'

const Landing = () => {
  return (
    <>
    <div className='flex flex-col items-center gap-6 py-10 overflow-hidden'>
        <span className='bg-[#e86294] text-white py-1 px-4 rounded-2xl'>
          Where Every Moment Becomes a Story
        </span>
        <div className='flex flex-col gap-5'>
          <h1 className='text-5xl max-w-3xl brico tracking-tighter text-center brico'>Create Content That  <span className='bg-[#101b36] text-white py-1 rounded-3xl px-5'>Connects</span> ,</h1>
            <h1 className='text-5xl max-w-3xl  brico tracking-tighter text-center'> <span className='bg-[#101b36] text-white py-1 rounded-3xl px-5'>Converts</span> and Captivates ✨</h1>
          <h2 className='text-xl max-w-3xl inter-tight text-center'>Big ideas, smart strategies, and endless creativity to supercharge⚡your brand!</h2>
        </div>
                <button className='bg-[#e86294] text-white py-1 px-3 rounded-3xl'>Get Started Now</button>

        <HeroVid />
    </div>
    </>
  )
}

export default Landing