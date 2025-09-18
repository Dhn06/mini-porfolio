import Image from 'next/image'



export default function About() {
    return (
        <div>
            <div className='font-bold flex justify-center md:text-9xl  text-3xl uppercase m-10 ' id="About">About Me</div>

            <div className='flex flex-col sm:flex-row items-center justify-between gap-x-15'>
                <Image
                    src="/1.png"
                    alt='Mustapha'
                    height={620}
                    width={600}
                    className='rounded-4xl' />

                <div className=' flex flex-col gap-y-10'>
                    <h2 className="text-4xl sm:text-7xl mt-5">
                        Crafting visuals that
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> inspire </span>
                        impact.
                    </h2>

                    <p className='max-w-lg'>
                        Focus on growing your business, while I craft impactful digital solutions that showcase your brand with clarity and creativity — ensuring you stand out in todays competitive world.
                    </p>


                </div>
            </div>
        </div>
    )
}
