const roundIfFloat = (number) =>{
    let roundedNum = number;
    if(!Number.isInteger(number)){
        roundedNum = roundedNum.toFixed(2)
    }
    return roundedNum
}

const populatePayInfo = (weeklySalary, hoursPerWeek) =>{
    let pay = {}
    pay.hourly = roundIfFloat(weeklySalary / hoursPerWeek);
    pay.monthly = roundIfFloat((weeklySalary*52)/12);
    pay.weekly = roundIfFloat(weeklySalary);
    pay.yearly = roundIfFloat(weeklySalary*52);
    return pay;
}

export default populatePayInfo;