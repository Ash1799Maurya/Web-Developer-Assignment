import React from 'react'; 

function CardGrid() {
  return (
    <div className="flex flex-col w-[1200px] h-[579px] items-center justify-center  mx-auto">
    <div className="w-full text-left mb-4"> 
        <p className="text-xl font-bold w-[113px] h-[29px]">Heading</p>
        <p className="text-lg text-gray-600 w-[113px] h-[22px]">Subheading</p>
      </div>
      <div className='w-full flex flex-wrap justify-between'>
        {[...Array(6)].map((_, index) => (
          <div key={index} className='w-[325.33px] border border-gray-300 m-2 flex flex-col p-4 rounded-lg'>
            <h1 className='w-full h-auto flex justify-start'>"Quote"</h1>
            <div className='flex flex-row items-center mt-2'>
              <img src="/Avatar.png" className='w-[40px] h-[40px]' alt="Avatar" />
              <div className='ml-2'>
                <h1 className='w-[87px] h-auto text-[#757575]'>Title</h1>
                <h1 className='w-[87px] h-auto text-[#B3B3B3]'>Description</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
