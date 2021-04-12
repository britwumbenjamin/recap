import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import Button from "../button/Button";
import Inputfield from "../Inputfield/Inputfield";

const SignIn = () => {
    const history = useHistory ()
    const [values, setvalues] = useState({})
    const onchange = (e) =>
      setvalues({...values, [e.target.name]: e.target.value}
      )
      console.log(values);
      const submit = (e) => {
          e.preventDefault()
          history.push("/Signup")
          console.log(values);
      }
      const submitemail = (e) => {
          e.preventDefault()
          console.log(values);
      }


  return (
    <div className="signinform">
      <h1>SignIn here</h1>
      <Inputfield label="email" name="email" type="email" placeholder="someone@gmail.com"  onchange={onchange}/>
      <Inputfield label="password" name="password" type="password" onchange={onchange}/>

      <Button text={"New user? SignUP here"} onclick={submit}/>
      <Button text={"SignIn"} onclick={submitemail}/>
    </div>
  );
};

export default SignIn;
