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
        <div className='mx-10'>
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

            <div className='flex items-center justify-between gap-x-15'>
                <Image
                    src="/1.png"
                    alt='Mustapha'
                    height={620}
                    width={600}
                    className='rounded-4xl' />

                <div className=' flex  flex-col gap-y-10'>
                    <h2 className='text-7xl'>Creating designs that <span className='text-orange-600'>ignite</span>  responses.</h2>
                    <h3>Direct your energy towards growing your business, and entrust me with the task of efficiently presenting your business in the digital world, setting it apart from competitors.</h3>
                    <SecondButton text="About Me" />
                </div>
            </div>
            <div className='font-bold flex justify-center text-9xl uppercase m-10 '>About Me</div>
            

            <div className='text-5xl font-bold '>
                <p>I provide artistic <span className='text-orange-600'>solutions</span> to </p>
                <p> meet your business  </p>
                <p>requirements.</p>
            </div>

            <div className='flex justify-between my-10 gap-x-10'>
                <div>
                    <Image src="/writing.png" alt="note" height={620} width={500} />
                    <p>My services blend creativity and strategy to bring your vision to life, leaving a lasting impact.</p>
                </div>

                <div>
                    <ul>
                </ul>
                </div>
            </div>
        </div>

    )
}
