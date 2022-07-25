import React from 'react'
import { Link } from 'react-router-dom'

export default function BasketBanner() {
  return (
    <>
    <section className="w-full p-3 relative bg-yellow-300">
        <div className='bg-yellow-300 absolute top-[25%] translate-x-[12%] flex justify-items-center w-3/4 h-1/3'>
            <div className='my-auto mx-auto'>
                <h1 className='p-2 flex'>
                    <span className='py-auto mr-3 text-xl font-bold text-black'>Your Cart is empty:</span>
                    <span className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-9 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </span>
                    </h1>
                <button className="mt-2 text-lg p-2  text-black">
                    <Link to="/">
                        <span className="font-bold">
                        Go Shopping 
                        </span>
                        <span className='ml-2 inline-block'>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left font-bold h-5 w-5" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                          </span>
                </Link>
                </button>
            </div>
        </div>
    </section>
    </>
  )
}
