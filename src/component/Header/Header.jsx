import React, { useState } from 'react'
import { MdLocationOn, MdSearch } from 'react-icons/md'
import { HiCalendar, HiMinus, HiPlus } from 'react-icons/hi'
import { Button } from 'flowbite-react';


function Header() {

    const [destination, setDestination] = useState("");
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({ adult: 1, children: 0, room: 0 });
    return (
        <div>
            <header className='flex item-center justify-center m-2 p-2'>
                <div>
                    <span className='mx-4 h-full flex items-center '>Home </span>
                </div>
                <div className='w-full '>
                    <div className='grid grid-cols-7  border-gray-200 border-[1px] rounded-xl py-2 '>
                        <div className='col-span-2 pr-2 center'>
                            <form onSubmit={""} className='center w-full ml-4 outline-none border-r-[1px] border-r-gray-200'>
                                <span className='text-red-400'><MdLocationOn /> </span>
                                <input className="text-input" type="text" placeholder='Where to go ?' value={destination} onChange={(e) => setDestination(e.target.value)} />
                            </form>
                        </div>
                        <div className='col-span-2 center border-r-[1px] border-r-gray-200'>
                            <HiCalendar className='text-purple-600 mr-2' />
                            <div>2023/06/24</div>
                        </div>
                        <div className='col-span-2 center relative border-r-[1px] border-r-gray-200 cursor-pointer' onClick={() => setOpenOptions(!openOptions)}>
                            {openOptions && <GuestOptionalList />}
                        </div>
                        <div className='col-span-1 center'>
                            <span className='bg-purple-400 text-white text-lg rounded-lg p-2'><MdSearch /></span>
                        </div>
                    </div>
                </div>

            </header >
        </div >
    )
}

export default Header



function GuestOptionalList() {

    return (

        <div className='absolute w-48  p-2 top-[100%] border-[1px] shadow-lg border-slate-200 rounded-lg  bg-gray-50 '>
            <GuestOptionItem />
            <GuestOptionItem />
            <GuestOptionItem />
            <GuestOptionItem />
        </div>);
}


function GuestOptionItem() {
    return (
        <div className='flex items-center justify-around mt-2 '>
            <span>adult</span>
            <div className='center '>

                <Button className='bg-slate-200  text-black rounded-md center w-5 h-5'><HiMinus className='text-[12px]' /></Button>
                <span className='mx-2 w-5 h-5 center text-base'>1</span>
                <Button className='bg-slate-200 text-black rounded-md w-5 h-5 center '><HiPlus className='text-[12px]' /></Button>

            </div>
        </div>
    )
}