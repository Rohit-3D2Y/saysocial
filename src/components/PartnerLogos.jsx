import React from 'react'

const PartnerLogos = () => {
  return (
    <div className='py-20'>
        <div className="max-w-5xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-5xl brico tracking-tight text-[#101b36]">
         We don't just work together --<span className="text-black"> we <span className='text-[#e86294]'>grow</span> together</span>
        </h2>
      </div>

      <div className="max-w-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
  {Array.from({ length: 10 }).map((_, i) => (
    <div
      key={i}
      className="bg-gray-300 h-20 w-full rounded-md shadow-sm"
    ></div>
  ))}
</div>

    </div>
  )
}

export default PartnerLogos