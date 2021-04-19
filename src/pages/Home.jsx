import React from 'react';
import '../styles/Home.css';

const Home = () =>{
    return(
        <>
        <div  class ='page' id='homepage'>
            <div class='welcomeBlock'>

            <h1 class='title'>Welcome to Business searcher!</h1>
                <p>During these difficult times, we know it may be hard for you to find a job to support yourself.<br/>
                    On top of that, we think that many people take jobs without actually knowing that their work <br/>
                    is undervalued. We designed this tool for people looking for a new job.
                </p>
            </div>               
            <div class='homeBottom'>
                <h1 class='title'>Features</h1>
                <p>Explore the website and play around with the tools we offer</p>
                <p> <a href='/paycalc'><b>Pay calculator</b></a> to measure the wage you earn</p>
                <p><a href='/jobinfo'><b>Job searcher</b></a> to find your suitable position and information about it, such as 
                    average salary and more.
                </p>
            </div>
        </div>
        </>
    )

}
export default Home;