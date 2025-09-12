import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import Button from './Button';
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image';
import SecondButton from './SecondButton';




export default function Header({ name }) {
    return (
        <div className='px-10 bg-green-400'>
            <h1 className='text-7xl text-center mt-12'>{name}</h1>
            <div className='flex  gap-10 justify-between mt-15 '>
                <div className='h-1 w-130 bg-sky-700'></div>
                <p className='max-w-[600px] text-2xl mr-6'> Experienced creative designer and custom artist based in London, blending innovation with artistic flair. Crafting captivating visuals that leave a lasting impression. </p>
            </div>


            <div className='flex  items-center gap-100 mt-10'>
                <div className='flex items-center gap-3 text-xl'>
                    <FaInstagram />
                    <FaDribbble />
                    <FaBehance />
                </div>

                <Button text="Hire Me" />
            </div>
            <div className='flex flex-col text-2xl items-center  my-5 justify-center cursor-pointer'>
                <MdKeyboardArrowDown className='-mb-5' />
                <MdKeyboardArrowDown className='-mb-5 text-gray-400' />
                <MdKeyboardArrowDown className='-mb-5 text-gray-400' />
            </div>

            


        </div>

    )
}
