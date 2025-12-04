import React from 'react'

function Footer() {
    return (
        <>


            <footer className="bg-neutral-primary-soft rounded-2xl shadow-xs border border-default relative overflow-hidden m-4">
                    
                <div className="w-full mx-auto   p-4 md:flex md:items-center md:justify-between relative overflow-hidden">
                    <span className="text-sm text-body sm:text-center">© 2025 <a href="#" className="hover:underline">Inspire India</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Registraion</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    )
}

export default Footer
