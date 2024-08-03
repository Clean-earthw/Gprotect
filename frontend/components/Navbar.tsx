import React from 'react'
import AppIcon from './LogoIcon';

const Navbar = () => {
    const defaultColor = '#d90429';
    const backgroundColorObject = { backgroundColor: defaultColor};
  return (
    <header>
        <div className='p-8 px-20'>
            <div className='sm:flex sm:items-center sm:justify-between'>
                <div className='text-center sm:text-left mb-7 sm:mb-0'>
                    <div className='flex gap-2 items-center sm:justify-start justify-center'>
                        <span className='text-2xl font-light flex items-center gap-2'>
                            <div style={backgroundColorObject} className='p-2 rounded-md'>
                                {/** APP ICON here */}
                                <AppIcon color='#ffffff' height='34' width='34'/>
                            </div>
                            <span style={{ color:'#d90429'}} className='font-bold text-mainColor'>
                                G
                            </span>
                            <span className='font-light'>Protect</span>
                        </span>
                    </div>
                </div>
                {/** Buttons */}
                <div className='mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center'>
                    <button 
                       style={backgroundColorObject}
                       className={`block sm:w-32 w-full border rounded-lg px-9 py-3 text-sm font-medium
                        transition focus:outline-none hover:bg-customRed hover:text-white border-customRed text-customRed`}
                       type='button'>
                        Sign in
                       </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar