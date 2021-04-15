import '../styles/JobInfo.css'
import React, {useState} from 'react';
import JobCard from '../components/JobCard';

const JobInfo = ()=>{
    const [jobKeyword, setJobKeyword] = useState(null);
    const [jobs, setJobs] = useState(null);

    const getJobs = async() => {

        const data = await fetch(`http://api.lmiforall.org.uk/api/v1/soc/search?q=${jobKeyword}`)
            .then((response)=>response.json())
        setJobs(data);
    }
    console.log('jobs are ', jobs)
    const renderJobs = ()=>{
        //jobs.forEach((job)=><JobCard job={job}/>)
        console.log('calling render jobs')
        let index = 0;
        const items = [];
        for(index=0; index<jobs.length; index+=2){
            items.push(            
            <>
                <div class='row'>
                    <div class='column'>
                        <JobCard job={jobs[index]}/>
                    </div>
                    <div class='column'>
                        <JobCard job={jobs[index+1]}/>
                    </div>
                </div>
            </>)
        }
        return <div class='cards'>{items}</div>;
    }
    return(
        <>
        <div class='search'>
            <input type='text' onChange={(e)=>setJobKeyword(e.target.value)} placeholder='Enter job title...'/>
            <button onClick={()=>getJobs()}>Search</button>
        </div>
        {jobs && renderJobs()}
        </>
    )
}
export default JobInfo;


{/* <div class="row">
<div class="column">
    <div class="card">
    <h3>Card 1</h3>
    <p>Some text</p>
    <p>Some text</p>
    </div>
</div>

<div class="column">
    <div class="card">
    <h3>Card 2</h3>
    <p>Some text</p>
    <p>Some text</p>
    </div>
</div>
</div> */}