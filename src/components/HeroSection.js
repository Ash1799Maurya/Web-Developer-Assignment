import React from 'react'

function HeroSection() {
  return (
    <section className="w-[1200px] h-[524px] flex flex-col items-center justify-center text-center bg-gray-200 mx-auto">
            <div className="max-w-[800px]">
                <h1 className="text-4xl mb-2 w=[151px] h=[86px]">Title</h1>
                <p className="text-lg mb-8 w=[151px] h=[38px] text=757575"> Subtitle</p>
           <div className='flex justify-center gap-4'>
           <button
            className="bg-[#767676] text-black px-4 py-2 rounded-md hover:bg-gray-700"
          >
            Button
          </button>
          <button
            className="bg-[#2C2C2C] text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Button
          </button>
           </div>
            </div>
     </section>
  )
}

export default HeroSection