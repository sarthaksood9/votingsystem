import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate();
    return (
        <div className='w-full flex justify-between py-5 px-5 shadow-lg'>
            <div>
                <h1 className="cursor-pointer" onClick={()=>{navigate('/')}}>VOTEBOX</h1>
            </div>
            <div className='flex gap-6 items-center'>
                <div className='flex gap-5'>
                    <div className="cursor-pointer"  onClick={()=>{navigate('/')}}>Votes</div>
                    <div className="cursor-pointer" >blogs</div>
                </div>
                <RxAvatar onClick={()=>{navigate('/login')}} className='text-[2rem]' />
            </div>
        </div>
    )
}

export default Navbar