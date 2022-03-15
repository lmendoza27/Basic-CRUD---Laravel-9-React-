import Header from './Header'
import React, {useState,useEffect} from 'react'
import Swal from 'sweetalert2';

function AddProduct()
{
    const [name,setName]=useState("")
    const [file,setFile]=useState("")
    const [price,setPrice]=useState("")
    const [description, setDescription]=useState("")
    

    async function addProduct()
    {
        const formData = new FormData();
        formData.append('file',file)
        formData.append('price',price)
        formData.append('description',description)
        formData.append('name',name)
        

       
            
        if(name == null || name === "" || description == null || description === "" || price == null || price === "" || file.length === 0){
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor rellene todos los campos requeridos',
                footer: 'Recuerde ser verídico',
                showConfirmButton: false,
                timer: 1500
              })
        }else if(!file.name.match(/.(jpg|jpeg|png)$/i)){
            Swal.fire({
                title: 'Oops...',
                imageUrl: 'https://64.media.tumblr.com/aa643f645c5e7d5ad08533a9612b7baa/522dc3121d3d2a03-af/s540x810/7a2895b07a0d5b597e4da8a4c0452dddec010917.pnj',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
                text: 'Imagen no permitida, la extensión debe ser .jpg, .jpeg o .png',
                footer: 'Recuerde ser verídico',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else{
            let result = await fetch("http://127.0.0.1:8000/api/addproduct",{
                method: 'POST',
                body: formData
            });
            document.getElementById("create-course-form").reset();
            Swal.fire({
                icon:"success",
                text: name+ " Agregado"
              })
        }

    }

    return(
        <div>
            <Header/>
            
            <div className="col-sm-6 offset-sm-3">
            <br/>
            <form id="create-course-form">
            <input type="text"  onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name"/><br/>
            <input type="file"  onChange={(e)=>setFile(e.target.files[0])} className="form-control" placeholder="File"/><br/>
            <input type="text"  onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="Price"/><br/>
            <input type="text"  onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="Description"/><br/>
            </form>
            <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
            </div>


        </div>
    )
}

export default AddProduct