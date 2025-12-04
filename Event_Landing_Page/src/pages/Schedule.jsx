import React from 'react'

function Schedule() {
    return (
        <>
            <section id='schedule' className=" h-screen w-full bg-orange-100  flex justify-center flex-col items-center">
                <div className="mb-15 w-full flex flex-col justify-center items-center">

                    <h1 className='text-5xl libre'>Schedule</h1>
                    <div className="w-80 justify-center items-center flex">

                        <span className='h-1 w-full bg-orange-400 '></span>
                        <span className='h-1 w-full bg-white '></span>
                        <span className='h-1 w-full bg-green-400 '></span>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center relative">
                    <div className="flex flex-col items-center">

                        <span className='h-6 w-14 bg-green-600 rounded-full flex justify-center items-center text-white'>9AM</span>
                        <span className='h-20 w-1 bg-green-600  border-'></span>
                    </div>
                    <div className="absolute ml-50 md:ml-70">
                        <p className="text-sm md:text-xl">PM Modi Inaugural Keynote</p>

                    </div>
                </div>
                <div className="w-full flex justify-center items-center    relative">
                    <div className="flex flex-col items-center">

                        <span className='h-6 w-14 bg-green-600 rounded-full flex justify-center items-center text-white'>11AM</span>
                        <span className='h-20 w-1 bg-green-600  border-'></span>
                    </div>
                    <div className="absolute mr-50 md:mr-70 ">
                        <p className="text-sm md:text-xl">Shark Tank India Panel</p>

                    </div>
                </div>
                <div className="w-full flex justify-center items-center    relative">
                    <div className="flex flex-col items-center">

                        <span className='h-6 w-14 bg-green-600 rounded-full flex justify-center items-center text-white'>2PM</span>
                        <span className='h-20 w-1 bg-green-600  border-'></span>
                    </div>
                    <div className="absolute ml-50 md:ml-70 ">
                        <p className="text-sm md:text-xl">AI Startups Pitch Battle</p>

                    </div>
                </div>
                <div className="w-full flex justify-center items-center    relative">
                    <div className="flex flex-col items-center">

                        <span className='h-6 w-14 bg-green-600 rounded-full flex justify-center items-center text-white'>5PM</span>
                        <span className='h-20 w-1 bg-green-600  border-'></span>
                    </div>
                    <div className="absolute mr-50  md:mr-70 ">
                        <p className="text-sm md:text-xl">Unicorn Founders Fireside</p>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Schedule
