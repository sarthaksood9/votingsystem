import React from 'react'
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
    return (
        <div className='w-full flex justify-between py-5 px-5 shadow-lg'>
            <div>
                <h1>VOTEBOX</h1>
            </div>
            <div className='flex gap-6 items-center'>
                <div className='flex gap-5'>
                    <div>Votes</div>
                    <div>blogs</div>
                </div>
                <RxAvatar className='text-[2rem]' />
            </div>
        </div>
    )
}

export default Navbar