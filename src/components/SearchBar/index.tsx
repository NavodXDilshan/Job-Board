import React,{useState} from 'react'

function SearchBar(props:any) {
    const [jobCriteria, setJobCriteria] = useState({
        title:"",
        type:"",
        location:"",
        experience:""

    })

    const handleChange=(e:any) =>{
        setJobCriteria((previousState)=>({
            ...previousState,
            [e.target.name]:e.target.value,
        }))
    }

    const search = async()=>{
        await props.fetchJobCustoms(jobCriteria);
    }

    console.log(jobCriteria);
  return (
    <div className='flex flex-row justify-center my-10 px-10 gap-5'>
        <select name="title" onChange={handleChange} value={jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden selected>Job Role</option>
            <option value="iOS Developer">iOS Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Android Developer">Android Developer</option>
            <option value="Developer Advocate">Developer Advocate</option>
        </select>
        <select name="type" onChange={handleChange} value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden selected>Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
        </select>
         <select name="location" onChange={handleChange} value={jobCriteria.location} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden selected>Location</option>
            <option value="Remote">Remote</option>
            <option value="In-Office">In-Office</option>
            <option value="Hybrid">Hybrid</option>
        </select>
        <select name="experience" onChange={handleChange} value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden selected>Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior level">Junior level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
        </select>
        <button onClick={search}className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-900'>Search</button>               
    </div>
  )
}

export default SearchBar