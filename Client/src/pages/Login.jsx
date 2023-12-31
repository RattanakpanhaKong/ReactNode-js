import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate()

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      // console.log(response.data);
      if(response.data.error){
        alert(response.data.error)
      }
      else{
        localStorage.setItem('accessToken', response.data)  
        navigate('/')
      }
    });
  };
  return (
    <div className="flex justify-center">
      <div className="border-2 border-black p-4 my-2">
        <div className="flex justify-between gap-20 my-2">
          <label>Username</label>
          <input
            className="border border-black "
            placeholder="Input username"
            type="text"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div className="flex justify-between gap-20 my-2">
          <label>Password</label>
          <input
            className="border border-black "
            placeholder="Input password"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
        <button
          className="rounded-lg p-2 bg-blue-500 text-white"
          onClick={login}
        >
          Login
        </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
