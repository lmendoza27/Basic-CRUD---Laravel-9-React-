import Header from './Header';
import React, {useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'

function ProductList()
{
    const [data,setData]=useState([]);
    useEffect(async()=>{
        let result = await fetch("http://127.0.0.1:8000/api/list");
        result = await result.json();
        setData(result);
    },[])
    console.warn("result",data)
    return(
        <div>
            <Header/>
            <h1>Product List</h1>
            <Table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Image</td>
                </tr>
                {
                    data.map((item)=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><img style={{width:100}} src={"http://127.0.0.1:8000/storage"+item.file_path.replace('public','')}/></td>
                        </tr>
                    )
                    }
                
            </Table>
        </div>

    )
}

export default ProductList