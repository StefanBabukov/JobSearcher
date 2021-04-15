import '../styles/JobInfo.css';

const JobCard = (props)=>{
    const {job} = props;
    return(
        <>
            <div class='card'>
                <h3>{job.title}</h3>
            </div>
        </>
    )
}
export default JobCard;