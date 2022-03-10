import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

class Login extends Component {

    constructor()
    {
        super();
        this.state={
            email:null,
            password:null,
            login:false,
            store:null,
            description:null,
            price:null,
            stock:null,
            items: [],
            DataisLoaded: false
        }

    }

    componentDidMount()
    {
        this.storeCollector()

        // Fetch Data
        this.getProducts()
            
    }

    getProducts()
    {

        fetch(
            "http://127.0.0.1:8000/api/products")
                        .then((res) => res.json())
                        .then((json) => {
                            this.setState({
                                items: json,
                                DataisLoaded: true
                            });
                        })
    }


    storeCollector()
    {
        let store = JSON.parse(localStorage.getItem('login'));
        if(store && store.login)
        {
            this.setState({login:true,store:store})
        }
    }

    login()
    {
        fetch('http://127.0.0.1:8000/api/v1/auth/login',{
            method:'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            //credentials: "same-origin",
            body:JSON.stringify(this.state)
        }).then((response)=>{
            response.json().then((result)=>{
                console.warn("result",result);
                localStorage.setItem('login',JSON.stringify({
                    login:true,
                    store:result.access_token
                }))
                this.storeCollector()  
            })
        })
    }

    post() 
    {
        this.inputDescription.value = "";
        this.inputPrice.value = "";
        this.inputStock.value = "";
        //alert(this.state.store.access_token)
        //alert(localStorage.getItem('login'))
        let access_token="Bearer "+ this.state.store.store
        fetch('http://127.0.0.1:8000/api/products2',{
            method:'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": access_token
                //"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NDY4NzAwNDUsImV4cCI6MTY0Njg3MzY0NSwibmJmIjoxNjQ2ODcwMDQ1LCJqdGkiOiJLN1l3d2wxMlE3ekZlalB1Iiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.hIrJROQFhIycxR4UiziUrSae5TJCBDy-E_ewqcxCcMw"
              },
            //credentials: "same-origin",
            body:JSON.stringify(this.state)
        }).then((response)=>{
            response.json().then((result)=>{
                console.warn("result",result);
            })
            //alert('Producto Registrado :)')
            Swal.fire({
                icon:"success",
                text:this.state.description + " Agregado"
              })
            this.getProducts()
        })
    }

    logout()
    {
        alert("Suerte!!!")
        //this.navigate('/')
    }

    render() {

        const { DataisLoaded, items } = this.state;

        if (!DataisLoaded) return <div>
        <h1> Espere un momento.... </h1> </div> ;

        return (
            <div>
            <h1>JWT Token with React</h1>
            {
                !this.state.login?
                <div>
                <input type="text"  onChange={(event)=>{this.setState({email:event.target.value})}} /> <br></br>
                <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}} /> <br></br>
    
                <button onClick={()=>{this.login()}} >Login</button>
                </div>
                :
                <div>
                    <h2>Bienvenido</h2>
                <label>Description</label><br/>
                <input type="text" ref={el => this.inputDescription = el}  onChange={(event)=>{this.setState({description:event.target.value})}} /> <br></br>
                <label>Price</label><br/>
                <input type="number" ref={el => this.inputPrice = el} onChange={(event)=>{this.setState({price:event.target.value})}} /> <br></br>
                <label>Stock</label><br/>
                <input type="number" ref={el => this.inputStock = el} onChange={(event)=>{this.setState({stock:event.target.value})}} /> <br></br>

                    <br></br>
                    <button type="button" class="btn btn-primary btn-lg btn-block" onClick={()=>{this.post()}}>POST</button>
                <br></br>
                <h3>Listado de Productos</h3>
            {
                items.map((item) => ( 
                <ol key = { item.id } >
                    Description: { item.description }, 
                    Price: { item.price }, 
                    Stock: { item.stock }  
                    </ol>
                ))
            }
     
        <button onClick={()=>{this.logout()}} >Logout</button>

                </div>   
            }
        </div>
        );
    }
}

export default Login