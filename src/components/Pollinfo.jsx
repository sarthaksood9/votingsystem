import React from 'react'

const Pollinfo = () => {
  return (
    <div className='h-100vh w-full p-8 flex flex-col gap-12 '>
        <div className='font-bold text-[2.5rem]'>
            <h1>Poll Title</h1>
        </div>
        <div>
            <p><span className='font-semibold'>Discription: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque sequi nobis dignissimos corporis dolorum fugiat fugit veniam natus, cupiditate, accusamus maxime beatae magnam tempora amet consequuntur obcaecati ad doloribus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione tempore impedit harum quod, delectus odio corporis pariatur, nulla voluptatem reiciendis, vel magni omnis unde tenetur facere aspernatur nemo eaque reprehenderit.</p>
        </div>

        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-[2.2rem]'>Cast Your Vote</h1>
          <p className='text-[#6A7280]'>Choose the candidate you believe in.</p>
        </div>

        <div className='flex justify-around items-center'>
            <div className='px-6 py-3  rounded-[0.50rem] w-[20rem]  border-[1px]  flex flex-col gap-10'>
              <div>
                <h1 className='text-[1.7rem] font-semibold'>Candidate A</h1>
              </div>
              <div>
                <p className='text-[#6A7280]'>A seasoned politician with a strong track record of public service.</p>
              </div>
              <div className='flex justify-center'>
                <button className='w-full rounded-md py-2 border-[1px] hover:bg-slate-800 hover:text-white'>Vote for Candidate A</button>
              </div>
            </div>
            <div className='px-6 py-3  rounded-[0.50rem] w-[20rem]  border-[1px]  flex flex-col gap-10'>
              <div>
                <h1 className='text-[1.7rem] font-semibold'>Candidate B</h1>
              </div>
              <div>
                <p className='text-[#6A7280]'>A seasoned politician with a strong track record of public service.</p>
              </div>
              <div className='flex justify-center'>
                <button className='w-full rounded-md py-2 border-[1px] hover:bg-slate-800 hover:text-white'>Vote for Candidate B</button>
              </div>
            </div>
            <div className='px-6 py-3  rounded-[0.50rem] w-[20rem]  border-[1px]  flex flex-col gap-10'>
              <div>
                <h1 className='text-[1.7rem] font-semibold'>Candidate C</h1>
              </div>
              <div>
                <p className='text-[#6A7280]'>A seasoned politician with a strong track record of public service.</p>
              </div>
              <div className='flex justify-center'>
                <button className='w-full rounded-md py-2 border-[1px] hover:bg-slate-800 hover:text-white'>Vote for Candidate C</button>
              </div>
            </div>
            <div className='px-6 py-3  rounded-[0.50rem] w-[20rem]  border-[1px]  flex flex-col gap-10'>
              <div>
                <h1 className='text-[1.7rem] font-semibold'>Candidate D</h1>
              </div>
              <div>
                <p className='text-[#6A7280]'>A seasoned politician with a strong track record of public service.</p>
              </div>
              <div className='flex justify-center'>
                <button className='w-full rounded-md py-2 border-[1px] hover:bg-slate-800 hover:text-white'>Vote for Candidate D</button>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Pollinfo