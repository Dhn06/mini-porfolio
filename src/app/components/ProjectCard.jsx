import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function ProjectCard({ src, title, desc, cat, type, link }) {
    return (
        <div className='border rounded-2xl border-blue-500 p-2'>
            <Image src={`/images/${src}.png`} width={800} height={300} className='rounded-2xl' alt={title} />
            <h2 className='text-lg font-bold'>{title}</h2>
            <p className='text-md'>{desc}</p>

            <div className='flex items-center justify-between'>

                <p>{cat}</p>
                <p>{type}</p>
                <Link href={link} className='inline-block bg-blue-500 text-white px-4 py-2 rounded-md'>
                    <button>other projects</button>
                </Link>
            </div>

        </div>
    )
}
