import React, { useState } from 'react';
export default function Signup() {

  const [formData, setFormData] = useState({
    email:"",
    password:"",
    confirm:"",
    isJoin: true
  });

  console.log("🚀 ~ file: Signup.js:12 ~ Signup ~ formData", formData)
  
  
  
  function handleChange(e) {
    const {name, type, value, checked} = e.target;
    setFormData(prevFormData =>({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password === formData.confirm){
      console.log("Successfully Signed up");
    }else{
      console.log("Passwords are not match");
      return;
    }

    if(formData.isJoin)
      console.log("Thank you for signing up for our newsletter");
    
  }

  return (

    <div className="container">
      <div className="signup-container">
        <form className="form-signup" method="post"onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <input
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            placeholder="Confirm Password"
          />

        <div>
            <input
              type="checkbox"
              name="isJoin"
              checked={formData.isJoin}
              onChange={handleChange}
              />
            <label 
              htmlFor="isJoin" 
              style={{"marginLeft": "6px"}}>
                I want to join the newsletter
            </label>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>


        </form>
      </div>
    </div>
  )
}
