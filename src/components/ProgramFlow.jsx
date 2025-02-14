import React from 'react'

const ProgramFlow = () => {
  return (
    <section className="bg-[url(img/3.jpg)] bg-cover bg-center">
        <div className='container mx-auto grid sm:grid-cols-1 md:grid-cols-2 text-teal-100 py-8'>
            <div className='flex flex-col justify-center items-center mb-8 '>
                <h1 className='text-3xl mb-6'>Program flow</h1>
                <button className="border-2 border-teal-100 text-teal-100 py-2 px-6 rounded-full">Register to Attend</button>
            </div>
            <div className='text-center md:text-left px-8'>
                <p className='p-4'>6:00 PM <span className='ml-8'>Gocktail hour</span></p>
                <p className='p-4'>7:00 PM <span className='ml-8'>Welcome remarks</span></p>
                <p className='p-4'>7:15 PM <span className='ml-8'>Dinner service</span></p>
                <p className='p-4'>8:00 PM <span className='ml-8'>Keynote speaker</span></p>
                <p className='p-4'>8:15 PM <span className='ml-8'>Live auction</span></p>
                <p className='p-4'>8:45 PM <span className='ml-8'>Entertainment segment</span></p>
                <p className='p-4'>9:15 PM <span className='ml-8'>Closing remarks</span></p>
                <p className='p-4'>9:30 PM <span className='ml-8'>Networking and silent auction</span></p>
                <p className='p-4'>10 PM <span className='ml-8'>Conclusion</span></p>
            </div>
        </div>
    </section>
  )
}

export default ProgramFlow