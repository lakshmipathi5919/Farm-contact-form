import { useState } from "react";
function App() {
  const[firstname,setfirstname] =useState('')
  const[lastname,setlastname] =useState('')
  const[phonenumber,setphonenumber] =useState('+91')
  const[email,setEmail] =useState('')

  // const[password,setpassword] =useState('')
  

  return (
   <>
   
   <div className='w-25 p-4 mt-5 m-auto border'>
    <h2 className='text-center text-primary'>Contact-Form</h2>
    {/* First Name  */}
    <div className='mt-3'>
      <label><h6>First Name</h6></label>
      <input type='firstname' className='form-control'value={firstname}onChange={(e)=>{setfirstname(e.target.value)}}/>
    </div>
    {/* Last Name */}
    <div className='mt-3'>
      <label><h6>Last Name</h6></label>
      <input type='lastname' className='form-control'value={lastname}onChange={(e)=>{setlastname(e.target.value)}}/>
    </div>
    {/* Phone-Number */}
    <div className='mt-3'>
      <label><h6>Contact</h6></label>
      <input type='Phonenumber' className='form-control'value={phonenumber}onChange={(e)=>{setphonenumber(e.target.value)}}/>
    </div>

    {/* Email */}
    <div className='mt-3'>
      <label><h6>Email</h6> </label>
      <input type='email' className='form-control'value={email}onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    {/* Password */}
    {/* <div className='mt-3'>
      <label><h6>Password</h6>
      </label>
      <input type='password' className='form-control'value={password}onChange={(e)=>{setpassword(e.target.value)}}/>
    </div> */}
    {/* Submit Button */}
    <div>
      <button className="btn btn-success w-100 mt-3" onClick={()=>{
        console.log('Firstname:',firstname);
        console.log('Lastname:',lastname);        
        console.log('PhoneNumber:',phonenumber);
        console.log('Email:',email);
        // console.log('Password:',password);
      }}>Submit</button>
    </div>
    {/* Clear All */}
    <div>
      <button className="btn btn-danger w-100 mt-3" onClick={()=>{
        console.log("Firstname:");
        console.log("Lastname:");
        console.log('PhoneNumber:');
        console.log("Email:");
        // console.log("Password");
      }}>Clear All</button>
    </div>


   </div>


   
   </>
  );
}

export default App;
