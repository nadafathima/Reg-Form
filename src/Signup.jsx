import React,{useState} from 'react'

function Signup() {

    const [formData, setFormData]=useState({
        firstname:'', lastname:'', email:'', password:''
    })

    const handleInputChange = (event)=>{
        const {name,value}= event.target
        setFormData((prevData)=>({...prevData,[name]:value}))
    }

    const handleSubmit =(event)=>{
      event.preventDefault()
      console.log(formData,"Input Data");
    }
    

  return (
    <>
    <div className='signup-card'>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">First Name:</label>
            <input type="text" placeholder='First Name' name='firstname' value={formData.firstName} onChange={(event)=>handleInputChange(event)}/>

            <label htmlFor="">Last Name</label>
            <input type="text" placeholder='Last Name' name='lastname'value={formData.lastName} onChange={(event)=>handleInputChange(event)}/>

            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Email' name='email'value={formData.email} onChange={(event)=>handleInputChange(event)}/>

            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter Password' name='password' value={formData.password} onChange={(event)=>handleInputChange(event)}/>

            <button type='submit'>Sign Up</button>
        </form>
    
    </div>    
    </>
  )
}

export default Signup
