import React from 'react'

function About() {
  return (
    <div className='w-[1200px] h-[909px] flex flex-col mx-auto'>
        <div className="w-full text-left mb-4"> 
        <p className="text-xl font-bold w-[113px] h-[29px]">Heading</p>
        <p className="text-lg text-gray-600 w-[113px] h-[22px]">Subheading</p>
      </div>
      <div>
      {[...Array(3)].map((_, index) => (
        <div className='w-[1072px] h-[208px] border border-gray-300 m-2 flex flex-row p-4 rounded-lg gap-4'>
        <div key={index}  className='w-[160px] h-[160px] flex justify-start bg-gray-200'></div>
        <div>
        <h1 className='font-bold mt-4'>Title</h1>
        <p className='font-light mt-2'>
              Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
            </p>
            <button
            className="bg-gray-200 text-black px-4 py-2 mt-4 w-[75px] h-[40px] rounded-md hover:bg-gray-700"
          >
            Button
          </button>
        </div>
        </div>
    ))}
      </div>

    </div>
  )
}

export default About