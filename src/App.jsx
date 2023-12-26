import './App.css'

import { data } from './data/data'

import ShowIMC from './Components/ShowIMC'
import CalcularIMC from './Components/CalcularIMC'

import { useState } from 'react'

function App() {

  const [Imc, SetImc] = useState("");
  const [Info, SetInfo] = useState("");


  const ImcResult = (e , Height, Weight) => {

    if (Height === ""){
      alert("Preencha os campos corretamente!")
    } else if ( Weight === ""){
      alert("Preencha os campos corretamente!")
    } else {
      const Resultado = Weight / (Height * Height);
      SetImc(Resultado.toFixed(0));  
    }
  }

  const GetBack = (e) => {
    e.preventDefault()

    SetImc("");
    SetInfo("");
  }

  return (
    <div>
        {!Imc ?(
          <CalcularIMC ImcResult={ImcResult}/>
        ) : (
          <ShowIMC Imc={Imc} Info={Info} data={data} GetBack={GetBack}/>
        )}
    </div>
  )
}

export default App
