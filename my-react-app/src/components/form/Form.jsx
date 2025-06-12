import React, { useState } from 'react'


const Form = () => {
  const [formData, setFormData]=useState({type:'', title:'', img:"", info:'', price:'', discountPrice:''})
  const inputChange=(e)=>{
    const {name, value}=e.target 
    setFormData((prev)=>({
      ...prev, [name]:value
    }))
  }
  const postFormdata=async(e)=>{
    e.preventDefault()
    const res=await fetch("https://6818f80e5a4b07b9d1d18a2e.mockapi.io/organic/food",{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    const data=res.json()
    console.log(data);
    
  }
  return (
    <div>
      <form onSubmit={postFormdata}>
      <input type="text" placeholder='Type' name='type' onChange={inputChange}/>
      <br />
      <input type="text" placeholder='Title' name='title' onChange={inputChange}/>
      <br />
      <input type="text" placeholder='Info' name='info' onChange={inputChange}/>
      <br />
      <input type="text" placeholder='img link' name='link' onChange={inputChange}/>
      <br />
      <input type="text" placeholder='price' name='price' onChange={inputChange}/>
      <br />
      <input type="text" placeholder='discount price' name='discountPrice' onChange={inputChange}/>
      <br />
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form