import './App.css'

import ShowIMC from './Components/ShowIMC'
import CalcularIMC from './Components/CalcularIMC'

import { useState } from 'react'

function App() {

  const [Imc, SetImc] = useState("");

  const ImcResult = (e , Height, Weight) => {
    console.log(Height);
    console.log(Weight);

    const Resultado = Weight / (Height * Height);
    SetImc(Resultado);

    console.log(Imc)
  }

  return (
    <div>
        {!Imc ?(
          <CalcularIMC ImcResult={ImcResult}/>
        ) : (
          <ShowIMC />
        )}
    </div>
  )
}

export default App
