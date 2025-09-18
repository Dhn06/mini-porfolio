import React from 'react'
// import { FaInstagram } from "react-icons/fa";
// import { FaDribbble } from "react-icons/fa";
// import { FaBehance } from "react-icons/fa";
import Button from './Button';
import { MdKeyboardArrowDown } from "react-icons/md";
import {BsArrowUpRight} from "react-icons/bs"



export default function Header({ name }) {
    return (
        <div className='px-10 '>
            <h1 className='md:text-7xl text-3xl text-center mt-12'>{name}</h1>
            <div className='flex md:flex-row flex-col gap-10 justify-between mt-15 '>
                <div className='h-1 md:w-130 bg-sky-700'></div>
                <p className='max-w-[600px] text-2xl mr-6'> Versatile software engineer and videographer, combining innovation with creativity. Delivering dynamic visuals and smart solutions that leave a lasting impact. </p>
            </div>


            <div className='flex md:flex-row flex-col  items-center gap-x-155 gap-y-4 mt-10'>
                <div className='flex items-center gap-3 text-xl'>
                    {/* <FaInstagram />
                    <FaDribbble />
                    <FaBehance /> */}
                </div>

                <Button data="Let's Talk">
                    <BsArrowUpRight />
                </Button>

            </div>
            <div className='flex flex-col text-2xl items-center  my-5 justify-center cursor-pointer'>
                <MdKeyboardArrowDown className='-mb-5' />
                <MdKeyboardArrowDown className='-mb-5 text-gray-400' />
                <MdKeyboardArrowDown className='-mb-5 text-gray-400' />
            </div>




        </div>

    )
}
