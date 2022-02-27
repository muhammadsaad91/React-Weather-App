import react, { useState, useEffect } from "react";

const App = () => {
    const[name , setName]=useState('');
    const [temp , setTemp]=useState('');
    const [submit , setSubmit]=useState('');
     
 const change = (e) => {
    setName(e.target.value);

}

const data =  async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=202d47ca85b13f6dce8d382b6fbc8e6f`);
    const data = await response.json();
    {temp=== null? document.getElementById('pa').innerHTML='not found' :setTemp(data.main.temp)}
   setSubmit(name);
}

const clicked = (e) => {
     data();

    setName('');
}



return (
    <>
    <div className="Main-div">
        <div className="inner-div">
           <div className="header"> <h1> SaAd Weather App</h1></div>
       <div className="flex-inp">  
        <div className="input-div"><input type="text" placeholder="Enter City Name"  value={name} onChange={change}/></div>
        <button onClick={clicked}>+</button>
        </div> 
        <div className="name"> <h1>{submit} </h1>
        {/* {name.length===''?<h2>Please Write Any City Name To get the current weather</h2>:null }  */}
       {temp===''? null:<p id="pa">{temp}°C</p>}

        </div>



        </div>
    </div>
    </>
    )
}
export default App;