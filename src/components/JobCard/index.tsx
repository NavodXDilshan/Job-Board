import dayjs from 'dayjs';
import React from 'react'


function propsCard(props:any) {
    const skills = ["JavaScript", "React", "Node.js"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff( `${props.postedOn}`, 'day');

  return (
    <div className='md:mx-40 mb-4 mx-3 items-center justify-center'>

            <div key={props.id} className='flex justify-between items-center px-6 py-4 mt-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='font-semibold sm:text-lg text-base'>{props.title} - {props.company}</h1>
                <p className='md:text-2xl text-sm'>{props.type} &#x2022; {props.experience} &#x2022; {props.location} </p>
                <div className='flex flex-row gap-2 items-center'>
                    {skills.map((skill) => {
                        return (
                            <p key={skill} className='text-sm sm:text-base text-gray-500 py-1 sm:px-2 border border-black rounded-md  bg-slate-200 sm:mt-2'>{skill}</p>
                        )
                    })}
                </div>
            </div>
            <div className='flex sm:flex-row flex-col gap-5 items-center ml-1'>
                <p className='text-sm sm:text-base text-gray-500 text-center'>Posted { diffInDays>1?diffInDays+"days ago": diffInDays+"day ago"}</p>
                <a href={props.props_link}>
                    <button className=' border-blue-500 border-2 sm:px-5 px-3 rounded-md py-1 text-blue-500 font-semibold cursor-pointer'>Apply</button>
                </a>
            </div>
        </div>
    

    </div>
  )
}

export default propsCard