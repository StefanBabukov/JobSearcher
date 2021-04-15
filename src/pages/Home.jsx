import React from 'react';
import jobsPic from '../static/workPic.jpeg'
import '../styles/Home.css';

const Home = (props) =>{
    return(
        <>
            <div class='welcomeBlock'>
                <h1>Welcome to Business searcher!</h1>
                <p>During these difficult times, we know it may be hard for you to find a job to support yourself.<br/>
                    On top of that, we think that many people take jobs without actually knowing what to expect <br/>
                    as their payment. We designed this tool for people looking for a new job ... to be continued ...
                </p>
                <img class='workImg' alt='Group of people working' src={jobsPic}/>
            </div>
            <div class = 'homeBottom'>
                <h1>Features</h1>
                <p>Explore the website and play around with the tools we offer</p>
                <p>Pay calculator to measure the wage you deserve</p>
                <p>Job searcher to find your suitable career</p>
            </div>
        </>
    )

}
export default Home;