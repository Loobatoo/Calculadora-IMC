import React from 'react'

import Button from './Button';
import { useState } from 'react'

const CalcularIMC = ({ImcResult}) => {

    const [Height, SetHeight] = useState("");
    const [Weight, SetWeight] = useState("");
    const [Result, SetResult] = useState("");

    
    const Valid = (text) => {
        return text.replace(/[^0-9.]/g, "");
    }

    const HandleHeight = (e) => {
        const Validated = Valid(e.target.value)

        SetHeight(Validated);
    }
  
    const HandleWeight = (e) => {
        const Validated = Valid(e.target.value)
        
        SetWeight(Validated);
    }

    const Clear = (e) => {
        e.preventDefault();

        SetHeight ("");
        SetWeight  ("");

        console.log("Limpou!")
    }

  return (
    <form className="Container">

    <h1> Calculadora de IMC </h1>

    <div className="Children">
        <label htmlFor="Height"> Altura: </label>
        <input 
        type="text"
        placeholder='1.80 M'
        onChange={HandleHeight}
        value={Height} />
    </div>

    <div className="Children">
        <label htmlFor="Weight"> Peso: </label>
        <input 
        type="text"
        placeholder='70 KG' 
        onChange={HandleWeight}
        value={Weight}/>
    </div>

    <div className='Buttons'>
        <Button id="Calcular" Text="Calcular" action={(e) => {ImcResult(e, Height, Weight)}}/>
        <Button id="Limpar" Text="Limpar" action={Clear}/>
    </div>


</form>
  )
}

export default CalcularIMC