import React from 'react'

export default function Contact() {
  return (
     <div className='font-bold  text-white flex  flex-col items-center justify-center  m-10 ' id="Contact">
        <h2 className='p-6 md:text-6xl  text-3xl uppercase'>Contact Me</h2>
        <div className='flex flex-col gap-5'>

      <input className='border-2 border-blue-500 rounded-2xl text-3xl p-3 lg:w-[900px] md:w-[600px]' type="text" name="name"  placeholder='Name' />
      <input className='border-2 border-blue-500 rounded-2xl text-3xl p-3 lg:w-[900px] md:w-[600px]' type="text" name="email" placeholder='Email'/>
      <input className='border-2 border-blue-500 rounded-2xl text-3xl p-3 lg:w-[900px] md:w-[600px]' type="number" name="phone number" placeholder='Phone Number'/>
      <textarea className='border-2 border-blue-500 rounded-2xl text-3xl p-3 lg:w-[900px] md:w-[600px]' type="text" name="message" placeholder='Message'/>
        <button className='bg-blue-500 text-white px-6 py-3 rounded-2xl text-3xl lg:w-[900px] md:w-[600px]'>Submit</button>
        </div>
    </div>
  )
}
 