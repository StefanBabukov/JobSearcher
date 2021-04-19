import React, {useState, useEffect,useRef} from 'react';
import populatePayInfo from '../utils/populatePayInfo';
import '../styles/PayCalculator.css' 

const PayCalculator = (props) =>{
    const [calculated, setCalculated] = useState(false);

    const [hoursPerWeek, setHoursPerWeek] = useState(null);
    const [moneyEarned, setMoneyEarned] = useState(null);
    const [period, setPeriod] = useState('hour');
    const [isValid, setIsValid] = useState(false);
    const [payInfo, setPayInfo] = useState({})
    const [error, setError] = useState(null);

    const inputStyles = useRef({
        hoursWorked: null,
        moneyEarned: null,
    })

    useEffect(()=>{
        if(hoursPerWeek && moneyEarned){
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    },[hoursPerWeek, moneyEarned]);

    const calculatePay = ()=>{
        if(!isValid){
            setError('Please fill the following fields: ');
            if(!hoursPerWeek){
                inputStyles.current.hoursWorked = {border: '1px solid red'};
            }
            if(!moneyEarned){
                inputStyles.current.moneyEarned = {border: '1px solid red'};
            }
            console.log('not valid');
            return;
        }
        setError(null);
        inputStyles.current = {};
        let weeklySalary = 0;
        //always calculate the week salary and use it to calculate the other values
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
                <h2 id='title' >Use this calculator to measure your earnings:</h2>

                <br/>
                {error && (<p style={{color:'red'}}>{error}</p>)}
                <h3>I work {' '} 
                    <input onChange={(val)=>setHoursPerWeek(val.target.value)} 
                            min='0'
                            type='number'
                            style={inputStyles.current.hoursWorked}
                    /> 
                    {' '} hours a week and make £ {' '}
                    <input type='number' 
                        min='0'
                        onChange={(val)=>setMoneyEarned(val.target.value)} 
                        style={inputStyles.current.moneyEarned}
                        /> per {' '}
                    <select name='period' onChange={(val)=>setPeriod(val.target.value)}> 
                        <option value='hour'>hour</option>
                        <option value='week'>week</option>
                        <option value='month'>month</option>
                        <option value='year'>year</option>
                    </select>
                    <br/>
                    <button class='button' id='calculateBtn' onClick={() => calculatePay()}>Calculate</button>
                </h3>
 
        {calculated && (
            <div class = 'calculatedInfo'>
                <h1 class='title'>We calculated that you also make:</h1>
                <h3>£{payInfo.hourly} per hour <br/></h3>
                <h3>£{payInfo.weekly} per week <br/></h3>
                <h3>£{payInfo.monthly} per month <br/></h3>
                <h3>£{payInfo.yearly} per year <br/></h3>
            </div>
        )}
            </div>

        </>
    )

}
export default PayCalculator;