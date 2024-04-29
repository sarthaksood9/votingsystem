import React from 'react'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate=useNavigate();
    return (
        <div className="w-full p-7 flex flex-wrap gap-10 h-fit">
            <div className='px-6 py-8 shadow-2xl max-w-[20rem] rounded-lg flex flex-col gap-3 h-fit'>
                <div className='flex justify-between'>
                    <h1>Title</h1>
                    <span className='font-bold text-green-500 gap-1'>&#8226;Live</span>
                </div>
                <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora magnam aliquam officiis</p>
                <button onClick={()=>{navigate("/vote")}} className='w-full bg-slate-800 text-white py-2 rounded-lg'>Vote</button>
            </div>
            <div className='px-6 py-8 shadow-2xl max-w-[20rem] rounded-lg flex flex-col gap-3 h-fit'>
                <div className='flex justify-between'>
                    <h1>Title</h1>
                    <span className='flex items-center gap-1 font-bold text-yellow-600'><IoCheckmarkDoneCircleOutline className='text-[1.2rem]' />Closed</span>
                </div>
                <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora magnam aliquam officiis</p>
                <button onClick={()=>{navigate("/vote")}} className='w-full border-slate-800 border-[1px] py-2 rounded-lg'>View Results</button>
            </div>
            <div className='px-6 py-8 shadow-2xl max-w-[20rem] rounded-lg flex flex-col gap-3 h-fit'>
                <div className='flex justify-between'>
                    <h1>Title</h1>
                    <span className='font-bold text-green-500 gap-1'>&#8226;Live</span>
                </div>
                <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora magnam aliquam officiis</p>
                <button onClick={()=>{navigate("/vote")}} className='w-full bg-slate-800 text-white py-2 rounded-lg'>Vote</button>
            </div>
            <div className='px-6 py-8 shadow-2xl max-w-[20rem] rounded-lg flex flex-col gap-3 h-fit'>
                <div className='flex justify-between'>
                    <h1>Title</h1>
                    <span className='font-bold text-green-500 gap-1'>&#8226;Live</span>
                </div>
                <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora magnam aliquam officiis</p>
                <button onClick={()=>{navigate("/vote")}} className='w-full bg-slate-800 text-white py-2 rounded-lg'>Vote</button>
            </div>
            <div className='px-6 py-8 shadow-2xl max-w-[20rem] rounded-lg flex flex-col gap-3 h-fit'>
                <div className='flex justify-between'>
                    <h1>Title</h1>
                    <span className='flex items-center gap-1 font-bold text-yellow-600'><IoCheckmarkDoneCircleOutline className='text-[1.2rem]' />Closed</span>
                </div>
                <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora magnam aliquam officiis</p>
                <button onClick={()=>{navigate("/vote")}} className='w-full border-slate-800 border-[1px] py-2 rounded-lg'>View Results</button>
            </div>
            <div className='px-6 py-8 shadow-2xl max-w-[20rem] rounded-lg flex flex-col gap-3 h-fit'>
                <div className='flex justify-between'>
                    <h1>Title</h1>
                    <span className='font-bold text-green-500 gap-1'>&#8226;Live</span>
                </div>
                <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora magnam aliquam officiis</p>
                <button onClick={()=>{navigate("/vote")}} className='w-full bg-slate-800 text-white py-2 rounded-lg'>Vote</button>
            </div>
            <div className='px-6 py-8 shadow-2xl max-w-[20rem] rounded-lg flex flex-col gap-3 h-fit'>
                <div className='flex justify-between'>
                    <h1>Title</h1>
                    <span className='font-bold text-green-500 gap-1'>&#8226;Live</span>
                </div>
                <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora magnam aliquam officiis</p>
                <button onClick={()=>{navigate("/vote")}} className='w-full bg-slate-800 text-white py-2 rounded-lg'>Vote</button>
            </div>
            <div className='px-6 py-8 shadow-2xl max-w-[20rem] rounded-lg flex flex-col gap-3 h-fit'>
                <div className='flex justify-between'>
                    <h1>Title</h1>
                    <span className='flex items-center gap-1 font-bold text-yellow-600'><IoCheckmarkDoneCircleOutline className='text-[1.2rem]' />Closed</span>
                </div>
                <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora magnam aliquam officiis</p>
                <button onClick={()=>{navigate("/vote")}} className='w-full border-slate-800 border-[1px] py-2 rounded-lg'>View Results</button>
            </div>
            
            
        </div>
    )
}

export default Home