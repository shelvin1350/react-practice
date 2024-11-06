import React, {useState} from "react";
function SignUp(){
    const[formData, setFormData] = useState({
        first: "", 
        last: "", 
        phone: "",
        email: ""
    })
    const handleInputChange = (event)=>{
        const {name, value} = event.target
        setFormData((prevData)=>({...prevData, [name]:value}))
    }
    const handleSubmit=()=>{
        console.log(formData, "The data")
    }
    return(
    <div className="">
   
    <form className='form'>
      <h1>Registration form</h1>
          <input type="text" name='first' placeholder='First Name: ' onChange={handleInputChange}/> 
          <input type="text" name='last' placeholder='Last name: 'onChange={handleInputChange}/>
          <input type="text" name='phone' placeholder='Phone: 'onChange={handleInputChange}/> 
          <input type="text" name='email' placeholder='Email: 'onChange={handleInputChange}/>
          <input type="button" className="button" value="Register" onClick={()=>handleSubmit()}/>

      </form>
    
   
    </div>
    );
    function click(){
        console.log("Clicked")
    }
}
export default SignUp;