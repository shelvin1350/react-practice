import React, { useState } from 'react'

function Assi() {
    const[formData, setFormData] = useState({
      state: 'hello'
    })
    const onChange = (event)=>{
      const {name, value} = event.target
      setFormData((prevData)=>({...prevData, [name]:value}))
    }
    const onDefault = ()=>{
      setFormData(()=> ({state:"hello"}))

    }
  return (
    <div>
        <h1>State Handling - {formData.state}</h1>
        <input type = "text" name='state' value={formData.state} onChange={onChange}/><br/>
        <input type = "button" value="Reset to default" onClick={onDefault}/>
    </div>
  )
}

export default Assi