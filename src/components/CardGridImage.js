import React from 'react';

function CardGridImage() {
  return (
    <div className='flex flex-col w-[1178px] h-[958px] mx-auto'>
      <div className="w-full text-left mb-4">
        <p className="text-xl font-bold">Heading</p>
        <p className="text-lg text-gray-600">Subheading</p>
      </div>
      <div className='w-full flex flex-wrap justify-between'>
        {[...Array(6)].map((_, index) => (
          <div key={index} className='w-[318px] h-[357px] border border-gray-300 m-2 flex flex-col p-4 rounded-lg'>
            <div className='w-[160px] h-[160px] flex justify-start bg-gray-200'></div>
            <h1 className='font-bold mt-4'>Title</h1>
            <p className='font-light mt-2'>
              Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGridImage;
