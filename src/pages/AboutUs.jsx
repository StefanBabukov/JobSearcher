import '../styles/AboutUs.css'
import React, {useRef, useState} from 'react';
const AboutUs = () => {
    const initialInfo = {
        firstname: null,
        lastname: null,
        email: null,
        hearAboutUs: null,
        message: null,
    }
    const [error, setError] = useState(null);
    let [validFields, setValidFields] = useState({})

    const contactInfo = useRef(initialInfo)
    const contact = ()=>{
        const {firstname, lastname, email, hearAboutUs, message} = contactInfo.current;

        const fillFields = {border: '1px solid red'};
        //first check if all fields are filled and if they are correct
        if(!firstname || !lastname || !email || !hearAboutUs || !message){
            let newValidFields = {}
            if(!firstname){
                newValidFields.firstname = fillFields;
            }
            if(!lastname){
                newValidFields.lastname = fillFields;
            }
            if(!email){
                newValidFields.email = fillFields;
            }
            if(!hearAboutUs){
                newValidFields.hearAboutUs = fillFields;
            }
            if(!message){
                newValidFields.message = fillFields;
            }
            setValidFields(newValidFields)
            setError('Please fill in the following fields');
            return;
        }
        if(!email.includes('@') || !email.includes('.')){
            setError('Not a valid email address')
            setValidFields({})
            setValidFields({email: fillFields});
            return;
        }
        validFields.current = initialInfo;
        setError(null);
        setValidFields({});
        alert(`
        First name: ${firstname || 'not set'}
        Last name: ${lastname || 'not set'}
        Email: ${email || 'not set'}
        How did you hear about us: ${hearAboutUs || 'not set'}
        Message: ${message || 'not set'}
        `);
    }

    const {firstname, lastname, email, hearAboutUs, message} = validFields;
    return(
        <div class ='page' id='aboutus'>
            <div id='information'>
                 <h1 class='title'>About us</h1>
                <h3>This site was created by Stefan Babukov</h3>
                <p>Stefan has had an interest in the IT industry for 6 years. Currently studying Computing
                    in Glasgow Caledonian University. He designed fully automated orchestration and containerized platform following
                    the DevOps ideology.  He also has experience in network engineering with an internship in the global telecom GTT as well
                    as a Cisco - CCNA routing and switching degree.
                </p>
            </div>

            <div id='form'>
                <h1 class='title'>Contact us</h1>
                <h3>{error || 'Please fill in your details and message'}</h3>
                <form>
                    <label>First Name:</label>
                    <input style={firstname} onChange={(e)=>{contactInfo.current.firstname=e.target.value}} type='text'/>
                    <label>Last Name:</label>
                    <input style={lastname} onChange={(e)=>{contactInfo.current.lastname=e.target.value}} type='text'/>
                    <label>Email:</label>
                    <input style={email} onChange={(e)=>{contactInfo.current.email=e.target.value}} type='text'/>
                    <label>How did you hear about us</label>
                    <select style={hearAboutUs} onChange={(e)=>{contactInfo.current.hearAboutUs=e.target.value}}>
                        <option>Select...</option>
                        <option value="Google search">Google search</option>
                        <option value="From a friend">From a friend</option>
                        <option value ='Social media'>Social media</option>
                        <option value='Ad'>Ad.</option>
                    </select>
                    <label>Message:</label>
                    <input style={message} onChange={(e)=>{contactInfo.current.message=e.target.value}} type='text'/>
                    <button type='button' onClick={()=>contact()} class='button'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default AboutUs;