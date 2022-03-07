import React, { useState, useEffect } from 'react'

// rafce
function Sum() {
    const [currentSum,setCurrentSum]=useState(0);
    const [clear,setClear]=useState(false);
  
    useEffect(()=>{
      document.querySelector('#result').value="";
    },[])
    
    useEffect(()=>{
      if(clear)
      document.querySelector('#result').value="";
    })
  
    const Add=(e)=>{
      e.preventDefault();
      if(clear) setClear(false);
      let currentNum=document.querySelector('#num').value
      if(currentNum=='')
      return;
      let sum= currentSum+parseInt(currentNum);
      setCurrentSum(sum);
      document.querySelector('#num').value="";
        
    }

    const Subtract=(e)=>{
        e.preventDefault();
        if(clear) setClear(false);
        let currentNum=document.querySelector('#num').value
        if(currentNum=='')
        return;
        let sum= currentSum-parseInt(currentNum);
        setCurrentSum(sum);
        document.querySelector('#num').value="";
    }
  
    const Clear=(e)=>{
      e.preventDefault();
      //console.log('sum:', currentSum);
      document.querySelector('form').reset();
      setClear(true);
      setCurrentSum(0);
    }
    // https://www.storyblok.com/tp/react-dynamic-component-from-json
    const data = {
        content: {
          body: [
            {
              _uid: "BUY6Drn9e1",
              component: "Comida Casera",
              headline: "Foo"
            },
            {
              _uid: "gJZoSLkfZV",
              component: "Ceviche",
              title: "Bar"
            },
            {
              _uid: "X1JAfdsZxy",
              component: "Ají de Gallina",
              headline: "Another headline"
            }
          ]
        }
      };
  
    return (
      <div className="App">
        <div className="app-title">
          <h1> Basic Form Calculator</h1>
        </div>
        <form>
              <input type="text" id="result" value={currentSum}  readOnly />   
              <input type="text" id="num" placeholder="Ingresa un número" />
              <button onClick={Add}>Sumar</button>
              <button onClick={Subtract}>Restar</button>
              <button onClick={Clear}>Clear</button>
        </form>
<br></br>
        <h3>Recolección de Platos</h3>
    
        <div> {data.content.body.map(block => block.component+" - ")}</div>
      </div>
    );
  }

export default Sum