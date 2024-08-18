import { useState, useEffect } from "react";
import { TextInput } from "components/Atoms/Inputs";
import { Button } from 'components/Atoms/Buttons'

const Login = () => {
  const [inputValue, setInputValue] = useState({
    userName: '',
    password: ''
  });

  const onInputChange = () => {};

  return(
    <div>
      <h1>Sign-Up</h1>
      <TextInput
        id="userName" 
        label="E-Mail"
        onChange={onInputChange} />
      <TextInput
        id="phoneNumber" 
        label="Phone Number"
        onChange={onInputChange} />
      <TextInput
        id="password" 
        label="Password"
        type="password" 
        onChange={onInputChange} />
      <Button
          label="Add New Item" 
          onClick={() => null}/>
    </div>
  );
}

export default Login;