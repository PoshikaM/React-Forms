import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    email :"",
    Phone : ""
  })

  const [error, setError] = useState({
    firstName : "",
    lastName : "",
    email :"",
    Phone : ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData , [name] : value })

    setError({ ...error , [name] : ""})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, Phone} = formData;

    if(firstName === ""){
      setError({ ...error , firstName : "First Name should not be empty" });
      return;
    }
    if(lastName === ""){
      setError({ ...error , lastName : "Last Name should not be empty "});
      return;
    }
    if(email ===  ""){
      setError({ ...error , email : "Email shoul be filled"});
      return;
    }
    if(Phone === ""){
      setError({...error, Phone : 'Fill the phone number'})
      return
    }

    if(!email.includes('@')){
      setError({ ...error , email : "Invalid Email"})
      return;
    }
    if(Phone.length != 10){
      setError({ ...error , Phone : "phone number should be 10 numbers"});
      return
    }

    console.log("success", formData)
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className='inputs'>
      <input 
      type="text" 
      name="firstName"
      placeholder='First Name'
      value={formData.firstName}
      onChange={handleChange}
      required
       />
      <p style={{color:'red'}}>{error.firstName}</p>

      <input 
      type="text" 
      name="lastName"
      placeholder='Last Name'
      value={formData.lastName}
      onChange={handleChange}
      required />
      <p style={{color:'red'}}>{error.lastName}</p>

      <input 
      type="text" 
      name="email"
      placeholder='Email'
      value={formData.email}
      onChange={handleChange}
      required />
      <p style={{color:'red'}}>{error.email}</p>

      <input 
      type="text" 
      name="Phone"
      placeholder='Phone number'
      value={formData.Phone}
      onChange={handleChange}
      required />
      <p style={{color:'red'}}>{error.Phone}</p>

      <button className='register' type='submit'>Register</button>
    </div>
    </form>
  )
}

export default App