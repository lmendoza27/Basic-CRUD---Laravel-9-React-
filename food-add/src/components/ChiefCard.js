import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import React, {useState,useEffect} from 'react'

export default function ChiefCard({chief}) {

    const [imagen,setImagen]=useState("")
    useEffect(async()=>{
        setImagen((chief.image).replace("public",""))
    },[])

    return (
      
            <div className="chief-card">
            <img src={'http://127.0.0.1:8000/storage/'+imagen}  alt="" />
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipe-count">Recipes: {chief.cantidad}<b></b></p>
                <p className="chief-cuisine">Cuisine: {chief.cuisine}<b></b></p>
                <p className="cheif-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>
        </div>
            
    )
}