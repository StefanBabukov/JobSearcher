import React, {useState, useEffect} from 'react';
import populatePayInfo from '../utils/populatePayInfo';
import '../styles/PayCalculator.css' 

const PayCalculator = (props) =>{
    const [calculated, setCalculated] = useState(false);

    const [hoursPerWeek, setHoursPerWeek] = useState(null);
    const [moneyEarned, setMoneyEarned] = useState(null);
    const [period, setPeriod] = useState('hour');
    console.log('hours worked is ', period)
    const [isValid, setIsValid] = useState(false);
    const [payInfo, setPayInfo] = useState({})



    useEffect(()=>{
        if(hoursPerWeek && moneyEarned){
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    },[hoursPerWeek, moneyEarned]);

    const calculatePay = ()=>{
        if(!isValid){
            // maybe show which fields are missing to the user

            console.log('not valid');
            return;
        }
        let weeklySalary = 0;
        switch(period) {
            case 'hour':
                weeklySalary = hoursPerWeek * moneyEarned;
                break;
            case 'week':
                weeklySalary = parseInt(moneyEarned);
                break;
            case 'month':
                weeklySalary = (moneyEarned * 12)/52;
                break;
            case 'year':
                weeklySalary = moneyEarned/52;
                break;
            default:
                console.log('invalid input');
        }
        setCalculated(true);
        setPayInfo(populatePayInfo(weeklySalary, hoursPerWeek))
    }

    return(
        <>
            <div class = 'payCalculator'>
                <h2>Use this calculator to measure your earnings:</h2>
                <br/>
                <h3>I work {' '} 
                    <input onChange={(val)=>setHoursPerWeek(val.target.value)} type='number'/> 
                    {' '} hours a week and make £ {' '}
                    <input type='number' onChange={(val)=>setMoneyEarned(val.target.value)} /> per {' '}
                    <select name='period' onChange={(val)=>setPeriod(val.target.value)}> 
                        <option value='hour'>hour</option>
                        <option value='week'>week</option>
                        <option value='month'>month</option>
                        <option value='year'>year</option>
                    </select>
                    <br/>
                    <button onClick={() => calculatePay()}>Calculate</button>
                </h3>
            </div>
 
        {calculated && (
            <div class='salaryInfo'>
                <h1>We calculated that you also make:</h1>
                <h3>£{payInfo.hourly} per hour <br/></h3>
                <h3>£{payInfo.weekly} per week <br/></h3>
                <h3>£{payInfo.monthly} per month <br/></h3>
                <h3>£{payInfo.yearly} per year <br/></h3>
            </div>
        )}
        </>
    )

}
export default PayCalculator;