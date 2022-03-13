import Header from './Header';
import React, {useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function ProductList()
{
    const [data,setData]=useState([]);
    useEffect(async()=>{
        getData();
    },[])
    
    async function deleteOperation(id)
    {
        let result = await fetch("http://127.0.0.1:8000/api/delete/"+id,{
            method: "DELETE"
        });
        result = await result.json();
        console.warn(result);
        getData();
    }



    async function getData()
    {
        let result = await fetch("http://127.0.0.1:8000/api/list");
        result = await result.json();
        setData(result);
    }



    return(
        <div>
            <Header/>
            <h1>Product List</h1>
            <div className="col-sm-8 offset-sm-2">
            <Table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Image</td>
                    <td>Operations</td>
                </tr>
                {
                    data.map((item)=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><img style={{width:100}} src={"http://127.0.0.1:8000/storage"+item.file_path.replace('public','')}/></td>
                            <td><span onClick={()=>deleteOperation(item.id)} className="delete">Delete</span>
                            <br/><br/>
                            <Link to={"update/"+item.id}>
                            {/*<Link to={`update/${item.id}`}>*/}
                            {/*<Link 
                            to={"update"}
                            state={{ id: item.id }}
                >*/}
                            <span className="update">Update</span>
                            </Link>
                            </td>
                            
                        </tr>
                    )
                    }
            </Table>
            </div>
        </div>
     

    )
}

export default ProductList