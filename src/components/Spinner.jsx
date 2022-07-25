import React from 'react'

export default function Spinner() {
  return (
    <>
      <section className="w-full h-screen p-3 relative bg-yellow-300">
        <div className='bg-yellow-300 absolute top-[25%] translate-x-[12%] flex justify-items-center w-3/4 h-1/3'>
          <div className="load"></div>
        </div>
      </section>
    </>
  )
}
