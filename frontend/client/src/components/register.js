import { useState  } from "react";
import React from "react";
import { useHistory } from "react-router";

export const Register = () => {
  const history =useHistory();

  const [user, setUser] = useState({
    name:"", email:"", password:"", cpassword:"" , phone :""  //This is for seting value from HTML tags to user object
  });

let name , val;
  const handleInput = (e) =>{
    console.log(e.target.name);
name = e.target.name;
val = e.target.value;

setUser({...user, [name]:val})
  }


//This is for joinging backend with frontend using fetch api 
  const PostData = async (e) =>{
    e.preventDefault();
    const { name , email , password ,cpassword ,phone} =user;
    console.log(user.name);
    const res  = await fetch('/register' ,{   //only path "./register " is not give any proxy error if you use hole site like http://localhost:3000/register than you will get   cros eroor 
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name , email , password ,cpassword ,phone
      })
    });

    const data = await res.json();


      if(data.status === 422 || !data){
        window.alert("Invalid credential");
        console.log("invalid credential");
        }else{
          console.log("registration sucessfuly")
          window.alert("Registration sucessful")
        }

        history.push('/login')
    
  }

  return (
    <div className="p-5 shadow-lg p-4 mb-4 bg-white">
      <form method="POST">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.name}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.email}
            onChange={handleInput}

          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="form-control"
            id="exampleInputPassword1"
            value={user.phone}
            onChange={handleInput}

          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            id="exampleInputPassword1"
            value={user.password}
            onChange={handleInput}
 
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Conformed password
          </label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.cpassword}
            onChange={handleInput}

          />
        </div>

        <button type="submit" className="btn btn-danger" onClick={PostData}>
          Registration
        </button>
      </form>
    </div>
  );
};
