import React, { useState } from 'react';
import "./form.css"
const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    gender:'',
    mail: '',
    password:'',
    errors:{}
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {username, gender,mail,password}= formData;

    const errors={};
    
    if(!username.trim())
        errors.name="Name is required";
    // if(!gender)
    //     errors.gender="Gender is required";
    if(!mail.trim())
       errors.mail="Gmail is required";
    else if (!/\S+@\S+\.\S+/.test(mail)) {
        errors.mail = 'Email is invalid';
    }
    if(!password.trim())
       errors.password="Password is required"
    
    
    if (Object.keys(errors).length === 0) {
        console.log('Form submitted with data:', formData);
        // Form submission logic
       // console.log("Submitted Values:",{name,gender,mail,password});
       setFormData({
        username: '',
        gender:'',
        mail: '',
        password:'',
        errors:{}
      });
    }
      else{
            setFormData({errors});
        }
      
    };

  return (
     <div className='formbody'> 
     <h3>Registration Form</h3>
    <form onSubmit={handleSubmit}>
      <div>
        
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder='Enter Username'
        style={{width:300, margin:10}}
        />
       {formData.errors.username && <span>{formData.errors.username}</span>}
      </div>
       {/* <div> 
            <label >Gender</label>
            <select name="gender" value={formData.gender}   onChange={handleInputChange}>
                <option value="" ></option>
                <option value="male">Mail</option>
                <option value="female">Femail</option>
                <option value="other">Other</option>
            </select>
            {formData.errors.gender && <span>{formData.errors.gender}</span>}
        </div> */}
     <div>
      <input
        type="email"
        name="mail"
        value={formData.mail}
        onChange={handleInputChange}
        placeholder='Enter email'
        style={{width:300, margin:10}}
        />
       {formData.errors.mail && <span>{formData.errors.mail}</span>}
      </div>
      <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter Password"
            minLength="4" maxLength="10" required
            style={{width:300, margin:10}}
            />
            {formData.errors.password && <span>{formData.errors.password}</span>}

        </div>

      <button type="submit" style={{width:150, margin:10, background:"green", border:"none",color:"white"}}>Register</button>
    </form>
      </div>
  );
};

export default Form;