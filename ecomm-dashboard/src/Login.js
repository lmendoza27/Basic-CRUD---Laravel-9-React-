import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header'

function Login()
{
    const [email,setEmail]=useState("")
    const [password,setPassword]= useState("")
    const history=useNavigate();



    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history("/add")
        }
    },[])

    async function login()
    {
        let item={email, password};
        let result = await fetch("http://127.0.0.1:8000/api/login_ecomm",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history("/add")
    }

    return(
        <div>
            <Header/> 
            <h1>Login Page</h1>
            <div className="col-sm-6 offset-sm-3">
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
            <br/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
            <br/>
            <button onClick={login} className="btn btn-primary">Login</button>

            </div>
           

        </div>
    )
}

export default Login