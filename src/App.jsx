import './App.css'

import { data } from './data/data'

import ShowIMC from './Components/ShowIMC'
import CalcularIMC from './Components/CalcularIMC'

import { useState } from 'react'

function App() {

  const [Imc, SetImc] = useState("");
  const [Info, SetInfo] = useState("");


  const ImcResult = (e , Height, Weight) => {

    const Resultado = Weight / (Height * Height);
    SetImc(Resultado);

  }

  return (
    <div>
        {!Imc ?(
          <CalcularIMC ImcResult={ImcResult}/>
        ) : (
          <ShowIMC Imc={Imc} Info={Info} data={data}/>
        )}
    </div>
  )
}

export default App
