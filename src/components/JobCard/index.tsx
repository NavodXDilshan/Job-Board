import dayjs from 'dayjs';
import React from 'react'


function propsCard(props:any) {
    const skills = ["JavaScript", "React", "Node.js"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff( `${props.postedOn}`, 'day');

  return (
    <div className='mx-40 mb-4'>

            <div key={props.id} className='flex justify-between items-center px-6 py-4 mt-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='font-semibold text-lg'>{props.title} - {props.company}</h1>
                <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location} </p>
                <div className='flex flex-row gap-2 items-center'>
                    {skills.map((skill) => {
                        return (
                            <p key={skill} className='text-gray-500 py-1 px-2 border border-black rounded-md  bg-slate-200 mt-2'>{skill}</p>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-row gap-5 items-center'>
                <p className='text-gray-500'>Posted { diffInDays>1?diffInDays+"days ago": diffInDays+"day ago"}</p>
                <a href={props.props_link}>
                    <button className=' border-blue-500 border-2 px-5 rounded-md py-1 text-blue-500 font-semibold cursor-pointer'>Apply</button>
                </a>
            </div>
        </div>
    

    </div>
  )
}

export default propsCard