import React, { useState } from 'react'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { EditTask, EditVote } from './Models';




const Home = () => {

    const[voteEdit,setVoteEdit]=useState(false);
    const[newVote,setNewVote]=useState(false);

    const hendleVoteEditClose=()=>{
        setVoteEdit(false);
    }
    const hendleNewVoteClose=()=>{
        setNewVote(false);
    }
    return (


        <>
            <div className="w-full p-7 flex flex-wrap gap-10 h-fit">
                <div className='px-6 py-8 shadow-2xl max-w-[20rem] rounded-lg flex flex-col gap-3 h-fit'>
                    <div className='flex justify-between'>
                        <h1>Title</h1>
                        <span className='font-bold text-green-500 gap-1'>&#8226;Live</span>
                    </div>
                    <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora magnam aliquam officiis</p>
                    <button className='w-full flex justify-center gap-1 font-bold items-center bg-slate-800 text-white py-2 rounded-lg' onClick={()=>{setVoteEdit(true)}}>EDIT <CiEdit className='text-[1.3rem]' /></button>
                    <button className='w-full flex justify-center gap-1 items-center border-red-500 border-[1px] py-2 text-red-500 rounded-lg'>Delete <AiOutlineDelete className='text-[1.2rem]' /></button>
                    <button className='w-full border-slate-800 border-[1px] py-2 rounded-lg'>Declare Results</button>
                </div>
                <div className='px-6 py-8 shadow-2xl max-w-[20rem] rounded-lg flex flex-col gap-3 h-fit'>
                    <div className='flex justify-between'>
                        <h1>Title</h1>
                        <span className='flex items-center gap-1 font-bold text-yellow-600'><IoCheckmarkDoneCircleOutline className='text-[1.2rem]' />Closed</span>
                    </div>
                    <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora magnam aliquam officiis</p>
                    <button className='w-full flex justify-center gap-1 font-bold items-center bg-slate-800 text-white py-2 rounded-lg' onClick={()=>{setVoteEdit(true)}}>EDIT <CiEdit className='text-[1.3rem]' /></button>
                    <button className='w-full flex justify-center gap-1 items-center border-red-500 border-[1px] py-2 text-red-500 rounded-lg'>Delete <AiOutlineDelete className='text-[1.2rem]' /></button>
                    <button className='w-full flex justify-center gap-1 items-center border-slate-800 border-[1px] py-2 rounded-lg'>Repost Poll <BsArrowRepeat className='font-semibold text-[1.2rem]' /></button>
                </div>

                <div className='px-6 py-8 shadow-2xl max-w-[20rem] rounded-lg flex flex-col gap-3 h-fit'>
                    <div className='flex justify-between'>
                        <h1>Title</h1>
                        <span className='font-bold text-green-500 gap-1'>&#8226;Live</span>
                    </div>
                    <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora magnam aliquam officiis</p>
                    <button className='w-full flex justify-center gap-1 font-bold items-center bg-slate-800 text-white py-2 rounded-lg' onClick={()=>{setVoteEdit(true)}}>EDIT <CiEdit className='text-[1.3rem]' /></button>
                    <button className='w-full flex justify-center gap-1 items-center border-red-500 border-[1px] py-2 text-red-500 rounded-lg'>Delete <AiOutlineDelete className='text-[1.2rem]' /></button>
                    <button className='w-full border-slate-800 border-[1px] py-2 rounded-lg'>Declare Results</button>
                </div>

                <div className='px-6 py-8 shadow-2xl max-w-[20rem] rounded-lg flex flex-col gap-3 h-fit'>
                    <div className='flex justify-between'>
                        <h1>Title</h1>
                        <span className='font-bold text-green-500 gap-1'>&#8226;Live</span>
                    </div>
                    <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora magnam aliquam officiis</p>
                    <button className='w-full flex justify-center gap-1 font-bold items-center bg-slate-800 text-white py-2 rounded-lg' onClick={()=>{setVoteEdit(true)}}>EDIT <CiEdit className='text-[1.3rem]' /></button>
                    <button className='w-full flex justify-center gap-1 items-center border-red-500 border-[1px] py-2 text-red-500 rounded-lg'>Delete <AiOutlineDelete className='text-[1.2rem]' /></button>
                    <button className='w-full border-slate-800 border-[1px] py-2 rounded-lg'>Declare Results</button>
                </div>
                
                <div className='px-6 py-8 shadow-2xl max-w-[20rem] rounded-lg flex flex-col gap-3 h-fit'>
                    <div className='flex justify-between'>
                        <h1>Title</h1>
                        <span className='flex items-center gap-1 font-bold text-yellow-600'><IoCheckmarkDoneCircleOutline className='text-[1.2rem]' />Closed</span>
                    </div>
                    <p className='text-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora magnam aliquam officiis</p>
                    <button className='w-full flex justify-center gap-1 font-bold items-center bg-slate-800 text-white py-2 rounded-lg' onClick={()=>{setVoteEdit(true)}}>EDIT <CiEdit className='text-[1.3rem]' /></button>
                    <button className='w-full flex justify-center gap-1 items-center border-red-500 border-[1px] py-2 text-red-500 rounded-lg'>Delete <AiOutlineDelete className='text-[1.2rem]' /></button>
                    <button className='w-full flex justify-center gap-1 items-center border-slate-800 border-[1px] py-2 rounded-lg'>Repost Poll <BsArrowRepeat className='font-semibold text-[1.2rem]' /></button>
                </div>
                

                <button onClick={()=>{setNewVote(true)}} className='w-[10rem] bottom-10 right-10 absolute flex justify-center gap-1 font-bold items-center bg-slate-800 text-white py-2 rounded-lg shadow-2xl'>New Poll  <IoMdAdd /></button>





            </div>
            {voteEdit && <>

                <EditVote mod={hendleVoteEditClose} />
                <style>
                    {`body{ overflow:hidden; }`}
                </style>
            </>
            }
            {newVote && <>

                <EditTask  mod={hendleNewVoteClose} />
                <style>
                    {`body{ overflow:hidden; }`}
                </style>
            </>
            }
        </>
    )
}

export default Home