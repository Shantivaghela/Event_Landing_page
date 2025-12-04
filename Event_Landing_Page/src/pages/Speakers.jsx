import React from 'react'
import Card from '../components/Card'
import { assets } from '../assets/images/assets'

function Speakers() {
    return (
        <>
            <section id='speaker' className="md:h-screen w-full flex flex-col  justify-center overflow-hidden items-center">
                <div className="mt-20 w-full flex flex-col justify-center items-center">

                    <h1 className='text-5xl libre'>Speakres</h1>
                    <div className="w-80 justify-center items-center mt-2 flex">

                        <span className='h-1 w-full bg-orange-400 '></span>
                        <span className='h-1 w-full bg-white '></span>
                        <span className='h-1 w-full bg-green-400 '></span>
                    </div>
                </div>
                <div className="h-full w-full pt-5 md:pt-0 flex md:flex-row flex-col md:justify-evenly md:items-center md:gap-3 px-2 gap-1 md:px-5">
                <Card name="Anupam Mittal (Shark Tank)"
                 image={assets.anupam}
                 dec="Anupam Mittal is an Indian entrepreneur, business executive and angel investor. He is the founder and CEO of People Group and Shaadi.com. "
                 />
                <Card name="Startup CEOs"
                 image={assets.ceos}
                 dec="Some prominent startup CEOs in India include Vijay Shekhar Sharma (Paytm), Deepinder Goyal (Zomato), Falguni Nayar (Nykaa), Ritesh Agarwal (OYO), and Bhavish Aggarwal (Ola). Other notable figures are Sachin and Binny Bansal (Flipkart), Byju Raveendran (BYJU'S), and Nithin Kamath (Zerodha)."
                 />
                <Card name="VC Partners"
                 image={assets.vc}
                 dec="VC partners (Venture Capital partners) are investors who fund early-stage startups with high growth potential. They provide not only financial support but also strategic guidance and industry connections to help startups succeed and scale "
                 />
                <Card name="Tech Ministers"
                 image={assets.TechM}
                 dec="The key ministers for technology in India are Cabinet Minister Shri Ashwini Vaishnaw, who heads the Ministry of Electronics and Information Technology, and Shri Jitin Prasada, who is the Minister of State in the same ministry.  "
                 />
                
                </div>
            </section>
        </>
    )
}

export default Speakers
