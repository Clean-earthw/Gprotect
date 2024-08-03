import React from 'react';
//mui icons

const ContainerTopbar = () => {
  return (
    <div className='p-3 flex justify-between items-center'>
        <div className="flex gap-4 items-center">
            <div>
                <h2 className='font-bold text-lg'>Sunday</h2>
                <span className='font-light text-[12px]'>29 JUNE 2024</span>
            </div>
            <div className='flex gap-1 ml-4'>
                <div className="text-customRed cursor-pointer">
                    {/** Icon */}
                </div>
                <div className="text-customRed cursor-pointer">
                    {/** Icon */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContainerTopbar