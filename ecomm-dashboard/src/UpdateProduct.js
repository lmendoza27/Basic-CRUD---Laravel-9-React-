import Header from "./Header"
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";

function UpdateProduct()
{
    const [data,setData]= useState([])
    const [image,setImage]= useState("")
    let params = useParams();
    console.warn(params.id)
    useEffect(async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/obtener/"+params.id);
        result = await result.json();
        setData(result)
        setImage(result.file_path.replace("public",""))
    },[])



    return(
        <div>
            <Header/>
            <h1>UpdateProduct Page</h1>
            <input type="text" defaultValue={data.name}/><br/>
            <input type="text" defaultValue={data.price}/><br/>
            <input type="text" defaultValue={data.description}/><br/>
            <input type="file" defaultValue={data.file_path}/> <br/>
     
            <img style={{width:100}} src={'http://127.0.0.1:8000/storage/'+image} alt=""/><br/>


           
            {/*<img style={{width:100}} src={"http://127.0.0.1:8000/storage"+(data.file_path.replace('public',''))} alt=""/><br/>
             */}              
                           

            <button>Update Product</button>
        </div>
    )
}

export default UpdateProduct