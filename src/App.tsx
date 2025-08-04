import Navbar from './components/NavBar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';
import {db} from './firebase.config';
import { collection, query, getDocs, orderBy,where } from "firebase/firestore";
import { useEffect, useState} from 'react';



export default function App() {

  interface jobs {
    id: string;
    postedOn: string;
    title: string;
    company: string;
    type: string;
    experience: string;
    location: string;
    skills: string[];
    job_link: string;
  }

  const [jobs, setJobs] = useState<jobs[]>([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs: jobs[] = [];
    const jobRef = query(collection(db, "jobs"));
    const q = query(jobRef, orderBy("postedOn", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
    // console.log(doc.id, " => ", doc.data());
    tempJobs.push({
      ...job.data() as Omit<jobs, 'id'>,
      id: job.id,
      postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobCustoms = async (jobCriteria:any) => {
    setCustomSearch(true);
    const tempJobs: jobs[] = [];
    const jobRef = query(collection(db, "jobs"));
    const q = query(jobRef,where("type","==",jobCriteria.type)
      ,where("title","==",jobCriteria.title,)
      ,where("location","==",jobCriteria.location,)
      ,where("experience","==",jobCriteria.experience,) ,orderBy("postedOn", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
    // console.log(doc.id, " => ", doc.data());
    tempJobs.push({
      ...job.data() as Omit<jobs, 'id'>,
      id: job.id,
      postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  useEffect(() => {
    fetchJobs();
  },[]);
  return (
  <>
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobCustoms={fetchJobCustoms}/>
      <div className='flex flex-col items-center justify-center'>
        {customSearch && <button onClick={fetchJobs} className='flex sm:mb-2  '>
            <p className='bg-blue-500 px-10 py-2 rounded-md text-white'>Clear Filter</p>
          </button>}
      </div>
      {jobs.map((job)=>(
        <JobCard key={job.id} {...job}/>
      ))}
      
    </div>
  </>

  );
}