import React from 'react'

export default function Button({ data, children }) {
  return (
    <button type='submit' className="p-4 bg-sky-500 rounded-lg border-3 border-transparent hover:border-blue-900 transition duration-300 group cursor-pointer flex items-center gap-2">
      {data}
      <span className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2">
        {children}
      </span>
    </button>
  )
}