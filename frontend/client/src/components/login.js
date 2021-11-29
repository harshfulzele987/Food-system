import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";


export const Login = () => {
  const history = useHistory();

  const [ email , setEmail] = useState('');
  const [ password , setPassword] = useState('');
console.log(email);
console.log(password);
  


const LoginUser = async (e) =>{
  e.preventDefault();
  // const { name , email , password ,cpassword ,phone} =user;
  // console.log(user.name);
  const res  = await fetch('/signin' ,{   //only path "./register " is not give any proxy error if you use hole site like http://localhost:3000/register than you will get   cros eroor 
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      email , password 
    })
  });

  const data = await res.json();


    if(data.status === 400 || !data){
      window.alert("Invalid credential");
      console.log("invalid credential");
      }else{
        console.log("registration sucessfuly")
        window.alert("LOg IN  sucessful")
      }

      history.push('/')
  
}

// const LoginUser = async(e) =>{
//     e.prventDefault();
//     console.log(e.email);
//     console.log(e.password);
    
//     const res = await fetch('/signin',{
//         method:"POST",
//         headers:{
//         "Content-Type":"application/json"
//       },
//         body: JSON.stringify({
//           email,
//           password
//         })
//     });

//     console.log(res);

//     const data = await res.json();

//     if(data.status === 400 || !data ){
//       window.alert("Sign in failed");
//       console.log("sign In failed");
//     }else{
//       window.alert("Sign in Suceesfully");
//       console.log("Sign In Succesfully");
//     }

//     history.push('/');


//   }

  return (
    <div className="p-5 shadow-lg p-4 mb-4 bg-white">
      <form method="POST">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}

            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-danger" onClick={LoginUser}>
          Log In
        </button>
      </form>
    </div>
  );
};
