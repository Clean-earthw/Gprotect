import React from 'react';
import { faMoon,faSearch,faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Searchbar from './Searchbar';
import ThemeMode from './ThemeMode';
const MainView = () => {
  return (
    <div className='w-full flex'>
        <div className="w-[80%] m-5">
            <Topbar/>
        </div>
    
    </div>
  )
}

export default MainView

function Topbar(){
    return (
        <div className="bg-white p-5 rounded-md flex justify-between">
            <div className="flex flex-col">
                <span className="text-xl">
                    <span className="font-bold">Hello</span>
                </span>
            </div>
            <div className='w-[50%] flex gap-3 justify-between'>
                <Searchbar/>
                <ThemeMode/>
            </div>
        </div>
    )
}

function RightSidebar(){
    return <div className='w-[20%] bg-white'>Test</div>
}