import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header'

function Register()
{
    const history=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history("/add")
        }
    },[])
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    

    async function signUp()
    {
        let item={name,email,password}
        console.warn(item)

        let result = await fetch("http://127.0.0.1:8000/api/register",{
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history("/add")

    }

    return(
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name" />
            <br/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
            <br/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
            <br/>
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
        </>
    )
}

export default Register