import React, { Component } from "react";

export default class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender:"",
      mail: "",
      password: "",
      errors:{}
    };
    
  }
  
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

handleSubmit=(event)=>{
     event.preventDefault();
     const{name, gender,mail,password}=this.state;

     // validation

     const errors={};

     if(!name.trim())
        errors.name="Name is required";
     if(!gender)
        errors.gender="Gender is required";
     if(!mail.trim())
        errors.mail="Gmail is required";
     else if (!/\S+@\S+\.\S+/.test(mail)) {
        errors.mail = 'Email is invalid';
      }
     if(!password.trim())
        errors.password="Password is required"


    if (Object.keys(errors).length === 0) {
     console.log("Submitted Values:",{name,gender,mail,password});
     this.setState({
        name:"",
        gender:"",
        mail:"",
        password:"",
        errors:{}
     });
    }
    else{
        this.setState({ errors });
    }
};
  render() {
    const{name, gender,mail,password,errors}=this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
            

          <input
            type="text"
            name="name"
            value={name}
            onChange={ this.handleInputChange}
            placeholder="Enter UserName"
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div> 
            <label >Gender</label>
            <select name="gender" value={gender}   onChange={this.handleInputChange}>
                <option value="" ></option>
                <option value="male">Mail</option>
                <option value="female">Femail</option>
                <option value="other">Other</option>
            </select>
            {errors.gender && <span>{errors.gender}</span>}
        </div>
        <div>
          <input
            type="email"
            name="mail"
            value={mail}
            onChange={this.handleInputChange}
            placeholder="Enter Gmail"
          />
          {errors.mail && <span>{errors.mail}</span>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Enter Password"
            minLength="4" maxLength="10" required
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
             <button type="submit">Submit</button>
        </div>
        </form>
      </div>
    );
  }
}
