import ChiefCard from "./ChiefCard"
import React, {useState,useEffect} from 'react'

export default function ChiefsSection(){


    const [data,setData]=useState([]);
    useEffect(async()=>{
        getData();
    },[])

    console.log(data);
    
    async function getData()
    {
        let result = await fetch("http://127.0.0.1:8000/api/listarchief2");
        result = await result.json();
        setData(result);
    }

    //const chiefs = data

    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
        
                { data.map(chief => <ChiefCard key={chief.id} chief={chief} />) }
            </div>
        </div>
    )
}