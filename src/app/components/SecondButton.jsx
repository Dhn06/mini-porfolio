import React from 'react'

export default function SecondButton({text}) {
  return (
    <button className='bg-neutral-700 w-40 p-4 rounded-lg border-white hover:border-gray-500 transition duration-300 cursor pointer'>{text}</button>
  )
}
