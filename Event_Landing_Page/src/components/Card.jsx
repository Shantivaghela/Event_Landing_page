import React from 'react'
import { assets } from '../assets/images/assets'

function Card(props) {
    return (
        <>


            <div className="bg-neutral-primary-soft w-full h-50 flex flex-col md:w-[25%] overflow-hidden md:block max-w-sm p-2 md:p-6 border  md:min-h-[70%] border-gray-500 rounded-2xl shadow-xs hover:shadow-2xl hover:scale-102 hover:bg-green-100 transition-all delay-100">
                <span>
                    <img className="md:rounded-2xl md:h-[60%] rounded-full h-15 w-15 md:w-full object-cover " src={props.image} alt="" />
                </span>
                <span>
                    <h5 className="mt-4 mb-2 text-1xl font-semibold tracking-tight text-heading">{props.name}</h5>
                <p className="mb-6 text-body text-[10px]">{props.dec}</p>
                </span>
               
            </div>

        </>
    )
}

export default Card
