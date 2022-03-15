import Header from "./Header"
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'

function UpdateProduct()
{
    const [name,setName]=useState("")
    const [file,setFile]=useState(null)
    const [price,setPrice]=useState("")
    const [description, setDescription]=useState("")
    const [data,setData]= useState([])
    const [image,setImage]= useState("")
    const history=useNavigate();
    let params = useParams();
    console.warn(params.id)
    useEffect(async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/obtener/"+params.id);
        result = await result.json();
        const { name, price, description} = result
        setName(name)
        setPrice(price)
        setDescription(description)

        setData(result)
        setImage(result.file_path.replace("public",""))
    },[])

    const changeHandler = (event) => {
		setFile(event.target.files[0]);
	};

    async function updateProduct()
    {
        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append('price',price)
        formData.append('description',description)
        formData.append('name',name)

        if(file!==null){
            formData.append('file', file)
          }

        if(name == null || name === "" || description == null || description === "" || price == null || price === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor rellene todos campos requeridos',
                footer: 'La Imagen es opcional',
                showConfirmButton: false,
                timer: 1500
              })

        }else{

            if(file!==null){
                //alert("SE actualizará con imagen")

                if(!file.name.match(/.(jpg|jpeg|png)$/i)){
                    //alert("La Imagen no es correcta")
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
                }else{
                    //alert("Actualización con Imagen Realizada")
                    let result = await fetch(`http://127.0.0.1:8000/api/actualiza/${params.id}`,{
                        method: 'POST',
                        body: formData
                    });
                    history("/")
                }

            }else{
                //alert("Se actualizará sin imagen")
                let result = await fetch(`http://127.0.0.1:8000/api/actualiza/${params.id}`,{
                    method: 'POST',
                    body: formData
                });
                history("/")
            }

        }

        /*Swal.fire({
            icon:"success",
            text: name+ " Agregado"
          })*/
    }

    return(
        <div>
            <Header/>
            <h1>UpdateProduct Page</h1>
            <div className="col-sm-6 offset-sm-3">
            <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" value={name}/><br/>
            <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control" value={price}/><br/>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control" value={description}/><br/>
            <input type="file" onChange={changeHandler} className="form-control" /> <br/>
     
            <img style={{width:300}} src={'http://127.0.0.1:8000/storage/'+image} alt=""/><br/><br/>


           
            {/*<img style={{width:100}} src={"http://127.0.0.1:8000/storage"+(data.file_path.replace('public',''))} alt=""/><br/>
             */}              
                           

            <button  onClick={updateProduct} className="btn btn-warning">Update Product</button>
            </div>
        </div>
    )
}

export default UpdateProduct