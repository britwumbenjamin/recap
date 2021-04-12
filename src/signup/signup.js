import React, { useState} from "react";
import {useHistory} from "react-router-dom"
import Inputfield from "../Inputfield/Inputfield";
import Button from "../button/Button";

function Signup() {
  const history = useHistory()
  const [values, setvalues] = useState({})

  const onchange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value })
    console.log(values);
  }

  const handleclick = (e) => {
    e.preventDefault()
    console.log(values)
  }
  const submit = (e) => {
    e.preventDefault()
    history.push("/")
    console.log(values)
  }
  return (
    <div>
      <div className="formcontainer">
        <form>
          <h1>SignUp here</h1>
          <Inputfield
            type="text"
            label="firstname"
            placeholder="e.g. Shadrack"
            name="firstname"
            onchange={onchange}
          />

          <Inputfield
            type="text"
            label="lastname"
            placeholder="e.g Mensah"
            name="lastname"
            onchange={onchange}
          />

          <Inputfield
            type="email"
            label="email"
            placeholder="someone@gmail.com"
            name="email"
            onchange={onchange}
          />
          <Inputfield
            type="password"
            label="password"
            placeholder="type password here"
            name="password"
            onchange={onchange}
          />

          <Inputfield
            type="password"
            label="confirm password"
            placeholder="comfirm password"
            name="cpassword"
            onChange={onchange}
          />
        </form>

        <button onClick={submit}>already have account? SignIn</button>

        <Button text="Signup" onclick={handleclick} />
      </div>
    </div>
  );
}

export default Signup;
