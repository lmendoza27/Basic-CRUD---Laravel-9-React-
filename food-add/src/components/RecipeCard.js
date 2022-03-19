import CustomImage from "./CustomImage"
import React, {useState,useEffect} from 'react'

export default function RecipeCard({recipe}){

    const [imagen,setImagen]=useState("")
    const [chief,setChief]=useState("")
    useEffect(async()=>{
        setImagen((recipe.image).replace("public",""))
        setChief((recipe.chief_image).replace("public",""))
    },[])

    return (
        <div className="recipe-card">
            <CustomImage imgSrc={'http://127.0.0.1:8000/storage/'+imagen} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={'http://127.0.0.1:8000/storage/'+chief} alt=""/>
                <p className="recipe-title">{recipe.name}</p>
                <p className="recipe-desc">{recipe.description}</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}