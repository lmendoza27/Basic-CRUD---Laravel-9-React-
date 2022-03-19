import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
import React, {useState,useEffect} from 'react'

export default function Recipes(){

    const [data,setData]=useState([]);
    useEffect(async()=>{
        getData();
    },[])

    async function getData()
    {
        let result = await fetch("http://127.0.0.1:8000/api/listar_recipes");
        //result = await result.json().sort(() => Math.random() - 0.5);
        result = await result.json();
        setData(result);
    }


    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {data.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}