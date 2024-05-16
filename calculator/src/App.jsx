import { useState } from 'react'

import './App.css'

function App() {
 const [height,setheight]=useState("");
 const [weight,setweight]=useState("");
 const [bmi,setbmi]=useState(null);
 const [bmistatus,setbmistatus]=useState("");
 const [errorMessage,seterrorMessage]=useState("")

const bmicalculator=()=>{
  const isValidHeight=/^\d+$/.test(height)
  const isValidWeight=/^\d+$/.test(weight)
  if(isValidHeight&&isValidWeight){
  const heightInMeter=height/100;
  const bmiValue=weight/(heightInMeter*heightInMeter)
  setbmi(bmiValue.toFixed(2))
  if(bmiValue<18.5){
    setbmistatus("Under Weight")
  }else if(bmiValue>=18.5&&bmiValue<24.9){
    setbmistatus("Normal Weight")
  }else if(bmiValue>=25&&bmiValue<29.9){
    setbmistatus("Over Weight")
  }else{
    setbmistatus("Obese")
  }
  seterrorMessage("");
  }else{
    setbmi(null)
    setbmistatus("")
    seterrorMessage("Please enter valid numeric value for height and weight.")
  }

 
}
const clearAll=()=>{
  setheight("")
  setweight("")
  setbmi(null)
  setbmistatus("")
}

  return (
    <>
      <div className='bmi-calculator'>
        <div className="box"></div>
        <div className="data">
          <h1>BMI  Calculator</h1>
          {errorMessage && <p className='error'>{errorMessage}</p>}
          <div className="input-container">
          <label htmlFor='height'>Height (cm):</label>
        <input type='text' id='height' value={height} onChange={(e)=>setheight(e.target.value)} className='input-height'/>
          </div>
          <div className="input-container">
          <label htmlFor='weight'>Weight (kg):</label>
          <input type='text' id='weight' value={weight} onChange={(e)=>setweight(e.target.value)} className='input-height'/>
          </div>
          <button className='cal' onClick={bmicalculator}>Calculate BMI</button>
          <button className='clear' onClick={clearAll}>clear</button>
          {bmi!==null &&(
            <div className="result">
            <p className='bmi'>Your BMI is: {bmi}</p>
            <p className='weight'>Status: {bmistatus}</p>
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
