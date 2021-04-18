import '../styles/JobInfo.css';
import React, {useState, useEffect} from 'react';
import populatePayInfo from '../utils/populatePayInfo';
// import populatePayInfo from '../utils/populatePayInfo';

const JobCard = (props)=>{
    const {job} = props; 
    const [detailsOpened, setDetailsOpened] =useState(false)
    const [annualWage, setAnnualWage] = useState(null)
    const renderTasks =()=>{
        const tasks = job.tasks.split(';');
        const list = tasks.map((task, index)=>{
            task=task.trim();
            task = task.charAt(0).toUpperCase() + task.slice(1)
            const background = index%2 ? '#14ADB8' : '#DAF9FB';
            return(
                <li style={{backgroundColor: background}} id='task'>{task}</li>
        )})
        return list
    }

    useEffect(()=>{
        getAnnualWage()
    },[])

    const getAnnualWage = async()=>{
        const wages = await fetch(`http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=${job.soc}`).then((response)=>response.json())
        let years = [];
        wages.series.forEach((entry)=>years.push(entry.year))

        const mostRecentYear = Math.max(...years)
        console.log('weekly is ', wages)
        console.log('most recent year ', mostRecentYear)
        let weeklyWage = null;
        wages.series.forEach((entry)=>{
            if(entry.year === mostRecentYear){
                weeklyWage = entry.estpay;
            }
        })
        // const wage = populatePayInfo();
        const wage = populatePayInfo(weeklyWage)
        setAnnualWage(wage.yearly)
    }
    const renderModal = () =>{
        //const annualWage = await getAnnualWage()
        // console.log('ANNUAL WAGE IS', annualWage)
        console.log(job.title, annualWage)
        return (
            <div class='modal'
                
            >
                <div class='modal-content'>
                    <span class="close" onClick={()=>setDetailsOpened(!detailsOpened)}>&times;</span>
                    <h3 class='modal-title'> <b>Description</b> </h3>
                    <p class='modal-info'>{job.description}</p>
                    <h3 class='modal-title'> <b>Tasks</b> </h3>
                    <ul>{renderTasks()}</ul>
                    <h3 class='modal-title'><b>Qualifications</b></h3>
                    <p class='modal-info'>{job.qualifications}</p>
                    <h3 class='modal-title'>Annual wage: £{annualWage}</h3>

                </div>

            </div>
        )
    }
    return(
        <>
            <div class='card'>
                <h3>{job.title}</h3>
                <button onClick={()=>setDetailsOpened(!detailsOpened)} class='button'>Details</button>
                {detailsOpened && renderModal()}
            </div>
        </>
    )
}
export default JobCard;