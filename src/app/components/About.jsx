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

                    <h2 className='text-4xl sm:text-7xl mt-5'>Creating designs that <span className='text-blue-600'>ignite</span>  responses.</h2>
                    <p className='max-w-lg'>Direct your energy towards growing your business, and entrust me with the task of efficiently presenting your business in the digital world, setting it apart from competitors.</p>

                </div>
            </div>
        </div>
    )
}
