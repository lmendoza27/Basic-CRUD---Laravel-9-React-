import React from 'react'
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";

export default function Therecipe(){
    const [data,setData]= useState([])
    const [imagen,setCheifimg]=useState("")
    const [imagen2,setRecipeimg]=useState("")
    let params = useParams();

    useEffect(async ()=>{
        let result = await fetch("http://127.0.0.1:8000/api/recipe/"+params.id);
        result = await result.json();

        setData(result)
        //console.log(result[0].name)

        setCheifimg(result[0].image.replace("public",""))
        setRecipeimg(result[0].chief_image.replace("public",""))
    },[])

    return (
        <div>
            <h1>
{/* https://medium.com/technofunnel/4-ways-to-add-styles-to-react-component-37c2a2034e3e
    Para agregar estilos a React - 4 formas (Abrir con Mozilla + extensión para desbloquear Medium Premium)
*/}

                {
            data.map((item)=>
                    <div>
                    <div className="therecipe-title">{item.name}</div>
                    <p className="therecipe-description">{item.description}</p>
                    <img className="therecipe-img1" src={'http://127.0.0.1:8000/storage/'+imagen} alt=""/>
                    <div>Receta de <span className="therecipe-author">{item.chief_name}</span></div>
                    <img className="therecipe-img1" src={'http://127.0.0.1:8000/storage/'+imagen2} alt=""/>
                    </div>
            )
                }
            </h1>
        </div>
    )
}