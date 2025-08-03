import Navbar from './components/NavBar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';


export default function App() {
  return (
  <>
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      <JobCard />
    </div>
  </>

  );
}