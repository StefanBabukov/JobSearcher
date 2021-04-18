import '../styles/JobInfo.css'
import React, {useState} from 'react';
import JobCard from '../components/JobCard';
import workers from '../static/workers.png';
import workers2 from '../static/workers2.png';

const JobInfo = ()=>{
    const [jobKeyword, setJobKeyword] = useState(null);
    const [jobs, setJobs] = useState(null);
    const [error, setError] = useState(null);

    const getJobs = async() => {
        setError(null);
        const data = await fetch(`http://api.lmiforall.org.uk/api/v1/soc/search?q=${jobKeyword}`)
            .then((response)=>response.json())
        if(!data.length || !data) {
            setError(jobKeyword)
            setJobs(null)
            return;
        }
        setJobs(data);
    }
    console.log('jobs are ', jobs)
    const renderJobs = ()=>{
        let index = 0;
        const items = [];
        // populating the cards
        for(index=0; index<jobs.length; index+=2){
            items.push(            
            <>
                <div class='row'>
                    <div class='column'>
                        <JobCard job={jobs[index]}/>
                    </div>

                    {/* only render card if it exists */}
                    {jobs[index+1] && (
                    <div class='column'>
                        <JobCard job={jobs[index+1]}/>
                    </div>
                    )}
                </div>
            </>)
        }
        return <div class='cards'>{items}</div>;
    }

    return(
        <>
        <div class='band'>
            <img  id='workers1' src={workers} alt='workers'/>
            <img id='workers2' src={workers2} alt='workers'/>

            <div class='search'>
                <h1 class='pageTitle'>Search jobs by keyword</h1>
                <input type='text' onChange={(e)=>setJobKeyword(e.target.value)} placeholder='Enter job title...'/>
                <button class='button' onClick={()=>getJobs()}>Search</button>
            </div>
            <div class='vertical'></div>
            <div class='results'>
            {jobs  && renderJobs()}
            {error && (
                <>
                    <div class='notFound'>
                        <h1>Sorry, we were unable to find jobs for <span>{error}</span> :(</h1>
                        <h3>Please try searching with another keyword.</h3>
                    </div>
                </>
            )}
            </div>
            <div class='vertical'/>
        </div>
        </>
    )
}
export default JobInfo;
