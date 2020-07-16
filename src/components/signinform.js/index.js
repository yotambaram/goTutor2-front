import React, { useState } from 'react'
import "./style.css"
import { useHistory } from "react-router-dom";
import API from "../../utils/API"
import { Link } from "react-router-dom";
import ImageUpload from '../../components/ImageWidget';
//import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';



export default function UserForm(props) {
const getPicture = pic => {
  let Picture = pic;

  setUserState({
    ...userState,
    picture: Picture
})
}

  const [userState, setUserState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    picture: ""

});
const history = useHistory();

const handleInputChange = event => {
  const { name, value } = event.target;
  setUserState({
      ...userState,
      [name]: value
  })
};


const handleFormSubmit = event => {
  event.preventDefault();
  
  API.createUser(userState)
  .then(res => {

      if(res.data){
          props.submitHandler(res.data)
          setUserState({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            picture: ""
          })
          history.push("/profile");
      } 
      else {
          props.submitHandler(false)
        
          history.push("/signup");
      }
      
  })

}




    return (
        <div className = "UserForm">
            <label className="label is-large">Sign Up:</label>
        <div className="field">
  <label className="label">First Name</label>
  <div className="control">
    <input className="input" type="text" onChange={handleInputChange} name="first_name" value={userState.first_name} placeholder="John"/>
  </div>
</div>

<div className="field">
  <label className="label">Last Name</label>
  <div className="control">
    <input className="input" type="text" onChange={handleInputChange} name="last_name" value={userState.last_name} placeholder="Smith"/>
  </div>
</div>

{/* <div className="field">
  <label className="label">UserName</label>
  <div className="control">
    <input className="input" type="text" onChange={handleInputChange} name="username" value={userState.username} placeholder="Create a Username"/>
  </div>
</div> */}

{/* <div className="field">
  <label className="label">ZipCode</label>
  <div className="control">
    <input className="input" type="text" onChange={handleInputChange} name="zipcode" value={userState.zipcode} placeholder="98101"/>
  </div>
</div> */}

<div className="field">
  <label className="label">Email</label>
  <div className="control">
    <input className="input" type="text" onChange={handleInputChange} name="email" value={userState.email} placeholder="Email"/>
  </div>
</div>

<div className="field">
  <label className="label">Password</label>
  <div className="control">

   <input type="password" className="input" onChange={handleInputChange} name="password" value={userState. password} placeholder="Password"/>



  </div>
</div>
<ImageUpload getPicture= {getPicture}/>
<div className="field is-grouped">
  <div className="control">
    <button className="button is-link" onClick={handleFormSubmit}>
      {/* <Link to ='/profile'>Submit</Link> */} Submit
    </button>
  </div>
  <div className="control">
    <button className="button is-link is-light"><Link to ='/'>Cancel</Link></button>
  </div>
</div>



    </div>
  )
}
