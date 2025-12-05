import React from 'react'
import { use } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Registration() {
    const [register, setRegiser] = useState({
        name: "",
        email: "",
        number: "",
        company: ""
    });
    const [load, setLoad] = useState(false);
    // console.log(register);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setRegiser({
            ...register,
            [name]: value,
        })

    }
    const handleSubmit = async (e) => {
        setLoad(true)
        try {
            e.preventDefault();
            const response = await fetch('http://localhost:5000/mail', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(register),
            })
            const res_data = await response.json();

            if (response.ok) {
                toast.success("Registration comleted & Please chack your gmail");
                setRegiser({
                    name: "",
                    email: "",
                    number: "",
                    company: ""
                })
                setLoad(false);
            } else {
                toast.error("Some thing wrong");
                setLoad(false);
            }

        } catch (error) {
            toast.error("Some thing wrong");
            setLoad(false);

        }
    }
    return (
        <>
            <section id='register' className='md:h-screen pb-3 md:pb-0  w-full pt-20 bg-green-100'>
                <div className=" w-full flex flex-col justify-center items-center ">

                    <h1 className='text-5xl libre'>Registration</h1>
                    <div className="w-80 justify-center items-center flex mt-2">

                        <span className='h-1 w-full bg-orange-400 '></span>
                        <span className='h-1 w-full bg-white '></span>
                        <span className='h-1 w-full bg-green-400 '></span>
                    </div>
                </div>
                <div className=" h-full w-full gap-3 md:gap-0  grid md:grid-cols-2 justify-center items-center">


                    <form className="max-w-md mx-auto w-full mt-5 md:mt-0" onSubmit={handleSubmit}>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="name"
                                id="floating_name" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                value={register.name}
                                onChange={handleInput}
                                placeholder=" " required />
                            <label for="floating_email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-heading  border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                value={register.email}
                                onChange={handleInput}
                                placeholder=" " required />
                            <label for="floating_email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                Email</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="number"
                                id="floating_number" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                value={register.number}
                                onChange={handleInput}
                                placeholder=" " required/>
                            <label for="floating_number" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Number</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="company" id="floating_company"
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                value={register.company}
                                onChange={handleInput}
                                placeholder=" " />
                            <label for="floating_compnay" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Company</label>
                        </div>

                        <button type="submit" className="text-white bg-orange-400 transition-all delay-150 cursor-pointer rounded-2xl hover:bg-green-400 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
                    </form>
                    <div className="w-full h-full   flex items-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14082.814002156247!2d77.23571829812195!3d28.6159270591541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce328b5a553f7%3A0x795cf6ea0f8b5378!2sPragati%20Maidan%2C%20New%20Delhi%2C%20Delhi!5e1!3m2!1sen!2sin!4v1764837407610!5m2!1sen!2sin"
                            className='h-full    md:h-[60%] w-full md:w-[90%] rounded-2xl'
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </section>
            <section className={`${load ? "block" : "hidden"} w-full h-full fixed z-30 bg-gray-600/30 top-0 bottom-0 flex justify-center items-center`}>
                <div className="flex gap-3 flex-wrap justify-center p-4 md:p-12">
                    <button
                        disabled=""
                        type="button"
                        className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-6 py-3 text-center inline-flex items-center animate-pulse dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
                    >
                        <svg
                            aria-hidden="true"
                            role="status"
                            className="inline w-5 h-5 mr-2 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                            ></path>
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        Please wait..
                    </button>
                </div>

            </section>
        </>
    )
}

export default Registration
