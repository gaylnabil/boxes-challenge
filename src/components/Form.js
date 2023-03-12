import React, {useState} from 'react';

export default function Form() {

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      comments:"",
      isFriendly: false,
    })

    // console.log('====================================');
    // console.log(formData);
    // console.log('====================================');

    function handleChange(e) {

      setFormData(prevData =>{
        const {name, type, value, checked} = e.target
        return {
          ...prevData,
          [name]: type === 'checkbox' ? checked: value
        }
      })

    }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("🚀 ~ file: Form.js:31 ~ handleSubmit ~ formData", formData)
  }
  /* Returning the form and the table. */
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <textarea 
          name="comments" 
          id="comment" 
          cols="30" 
          rows="10"
          value={formData.comments}
          placeholder="make Comments"
          onChange={handleChange}
        ></textarea>

       <div>
          <input
              type="checkbox"
              name="isFriendly"
              checked={formData.isFriendly}
              onChange={handleChange}
              placeholder="Email"
            />
            <label htmlFor="isFriendly" style={{"marginLeft": "6px"}}>Are you Friendly ?</label>
       </div>
       <div>
        <button type='submit'>Submit</button>
       </div>


      </form>
        <div className="data">
        <table border="0" cellSpacing="1" cellPadding="1">
          <tbody>
          <tr>
            <td>First Name: </td>
            <td>{formData.firstName}</td>
          </tr>
          <tr>
            <td>Last Name: </td>
            <td>{formData.lastName}</td>
          </tr>
          <tr>
            <td>Email: </td>
            <td>{formData.email}</td>
          </tr>
          <tr>
            <td>Comments: </td>
            <td>{formData.comments}</td>
          </tr>

          <tr>
            <td>Are you Friendly: </td>
            <td>{formData.isFriendly ? 'Yes': 'No'}</td>
          </tr>
          
          </tbody>
        </table>
        </div>

    </div>
  )


}
