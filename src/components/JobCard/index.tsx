import dayjs from 'dayjs';
import React from 'react'

function JobCard() {
    const skills = ["JavaScript", "React", "Node.js"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff('2024-10-28', 'day');

  return (
    <div className='mx-40 mb-4'>
        <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='font-semibold text-lg'>Frontend Developer - Amazon</h1>
                <p>Fulltime &#x2022; Fresher &#x2022; In-Office </p>
                <div className='flex flex-row gap-2 items-center'>
                    {skills.map((skill) => {
                        return (
                            <p key={skill} className='text-gray-500 py-1 px-2 border border-black rounded-md  bg-slate-200 mt-2'>{skill}</p>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-row gap-5 items-center'>
                <p className='text-gray-500'>Posted {diffInDays} days ago</p>
                <button className=' border-blue-500 border-2 px-5 rounded-md py-1 text-blue-500 font-semibold'>Apply</button>
            </div>
        </div>
    </div>
  )
}

export default JobCard