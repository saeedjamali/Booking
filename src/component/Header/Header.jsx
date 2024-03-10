import React, { useRef, useState } from 'react'
import { MdLocationOn, MdSearch } from 'react-icons/md'
import { HiCalendar, HiMinus, HiPlus } from 'react-icons/hi'
import { Button } from 'flowbite-react';
import '../../../public/customStyle.css'

import useOutsideClick from '../hooks/useOutsideClick';
import DatePicker, { DateObject } from "react-multi-date-picker"
// import persian from "react-date-object/calendars/persian"
import gregorian from "react-date-object/calendars/gregorian"
// import persian_fa from "react-date-object/locales/persian_fa"
import gregorian_en from "react-date-object/locales/gregorian_en"
import { Link, Navigate, createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import Hotel from '../../pages/Hotel';


function Header() {

    const [destination, setDestination] = useState("");
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState([{ id: 1, name: "adult", quantity: 0 }, { id: 2, name: "children", quantity: 0 }, { id: 3, name: "room", quantity: 0 }]);
    const [titleOption, setTitleOption] = useState("0 adult . 0 Children . 0 Room");
    const [values, setValues] = useState([
        new DateObject({ calendar: gregorian }).subtract(4, "days"),
        new DateObject({ calendar: gregorian }).add(4, "days")
    ])
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();



    const handleQuantity = (op, id) => {
        let title = "";
        const chngOptions = [...options];
        if (op == "plus") {
            chngOptions.map((op) => op.id == id ? op.quantity++ : "");
        } else if (op == "minus") {
            chngOptions.map((op) => op.id == id ? op.quantity-- : "");
        }
        setOptions(chngOptions);
        options.map((op, index) => {
            title += op.quantity + ' ' + op.name + (options.length == index + 1 ? "" : " - ");
        })
        setTitleOption(title);
    }

    const handleChange = (values) => {
        //تغییرات روی تاریخ رو اینجا اعمال کنید
        setValues(values)
    }

    const handleSearch = () => {
        console.log(values[0]);
        const encodedParams = createSearchParams({
            date: JSON.stringify(values),
            destination,
            options: JSON.stringify(options)
        })

        setSearchParams({ values, destination, options });
        // navigate("/hotels");
    }

    return (
        <div>

            <header className='flex item-center justify-center m-2 p-2'>
                <div>
                    <span className='mx-4 h-full  items-center hidden md:flex'>Home </span>
                </div>
                <div className='w-full '>
                    <div className='grid grid-cols-8  border-gray-200 border-[1px] rounded-xl py-2 gap-2'>
                        <div className='col-span-4 md:col-span-2 pr-2 center'>
                            <form onSubmit={""} className='center w-full ml-4 outline-none border-r-[1px] border-r-gray-200'>
                                <span className='text-red-400'><MdLocationOn /> </span>
                                <input className="text-input w-full" type="text" placeholder='Where to go ?' value={destination} onChange={(e) => setDestination(e.target.value)} />
                            </form>
                        </div>
                        <div className='col-span-4  md:col-span-2 center border-r-[1px] border-r-gray-200'>
                            <HiCalendar className='text-purple-600 mr-2' />
                            <div className='w-full'>
                                <DatePicker
                                    style={{
                                        outline: "none",
                                        backgroundColor: "aliceblue",
                                        height: "36px",
                                        width: "100%",
                                        border: "none",
                                        borderRadius: "8px",
                                        fontSize: "12px",
                                        padding: "3px 10px"

                                    }}
                                    value={values}
                                    onChange={handleChange}
                                    dateSeparator=" to "
                                    range
                                    calendar={gregorian}
                                    locale={gregorian_en}
                                    calendarPosition="bottom-right"
                                    minDate={new Date()}
                                />
                            </div>
                        </div>
                        <div className='col-span-4 md:col-span-2 center relative border-r-[1px] border-r-gray-200 cursor-pointer text-[12px] md:text-[16px]' >
                            <div id="GuestOptionalList" className='w-full center' onClick={() => setOpenOptions(!openOptions)}>
                                {titleOption}
                            </div>
                            {openOptions && <GuestOptionalList options={options} onOptions={handleQuantity} setOpenOptions={setOpenOptions} />}
                        </div>

                        <div className='col-span-4 md:col-span-2 center'>
                            <button className='bg-purple-400 text-white text-lg rounded-lg p-2' onClick={handleSearch}><MdSearch /></button>
                        </div>
                    </div>
                </div>

            </header >
        </div >
    )
}

export default Header



function GuestOptionalList({ options, onOptions, setOpenOptions }) {

    const optionsRef = useRef();

    useOutsideClick(optionsRef, () => setOpenOptions(false), "GuestOptionalList");
    return (

        <div className='absolute w-48  p-2 top-[100%] border-[1px] shadow-lg border-slate-200 rounded-lg  bg-gray-50 ' ref={optionsRef}>
            {
                [...options].map((option) => <GuestOptionItem option={option} onOptions={onOptions} />)
            }
        </div>);
}


function GuestOptionItem({ option, onOptions }) {
    const quantity = option.quantity;
    return (
        <div key={option.id} className='flex items-center justify-around mt-2  '>
            <span className='flex-1 text-base'>{option.name}</span>
            <div className='center '>

                <Button className='bg-slate-200  text-black rounded-md center w-5 h-5 ' disabled={quantity < 1} onClick={() => onOptions("minus", option.id)} ><HiMinus className='text-[12px]' /></Button>
                <span className='mx-2 w-5 h-5 center text-base'>{quantity}</span>
                <Button className='bg-slate-200 text-black rounded-md w-5 h-5 center ' onClick={() => onOptions("plus", option.id)} ><HiPlus className='text-[12px]' /></Button>

            </div>
        </div >
    )
}