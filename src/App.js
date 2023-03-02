import React,{useState} from 'react';
import './App.css';

function App() {
  const [value, setValue]=useState({
    firstName:"",
    lastName:"",
    email:"",
  });
  
  const handleFirstNameInputChange=(event)=>{
    setValue({...value, firstName: event.target.value})
  }
  const handleLastNameInputChange=(event)=>{
    setValue({...value,lastName: event.target.value})
  }
  const handleEmailInputChange=(event)=>{
    setValue({...value, email: event.target.value})
  }
  const [valid, setValid]= useState(false);
  const [submitted, setSubmitted]= useState(false);
  const handleSubmitted=(event)=>{
    event.preventDefault();
    setSubmitted(true);
    if(value.firstName && value.lastName && value.email){
      setValid(true);
    }

  }
  
  return (
    <div className="form-container">
     <form className="register-form"  onSubmit={handleSubmitted} >
     {submitted && valid ? <div className="success">Successfully Submitted! Thank You!</div> : null }
     <input
     onChange={handleFirstNameInputChange}
     value={value.firstName} 
     type="text" 
     placeholder="First Name"
     name="firstName" />
     {submitted && !value.fistName ? <span>Please enter your first name</span> : null }
     <input 
     onChange={handleLastNameInputChange}
     value={value.lastName} type="text" 
     placeholder="Last Name"
      name="lastName"
     />
    {submitted && value.lastName ? <span>please enter your last name</span> : null}
     <input 
     onChange={handleEmailInputChange}
     value={value.email}
     type="email" 
      placeholder="Email"
      name="email"
     />
     {submitted && !value.email ? <span>please enter your email</span> : null}
     <button type="button"
     >Register</button>
     </form>
    </div>
  );
}

export default App;
