import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <ul className='flex items-center justify-between mx-10 my-8 font-bold text-lg gap-15'>
                <div className='flex items-center gap-5'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='active:text-orange-500 hover:texto'>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/works">Projects</Link>
                    </li>
                </div>

                <div>
                    <li>
                        <Image
                            src="/logo.png"
                            alt='Logo'
                            height={120}
                            width={100}
                            className='rounded-4xl' />
                        {/* <Link href="/logo">Logo</Link> */}
                    </li>
                </div>

                <div className='flex items-center gap-5'>
            
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}
