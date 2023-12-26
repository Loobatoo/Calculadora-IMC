import React, { useEffect, useState } from 'react';

import './ShowIMC.css';

import Button from './Button';

const ShowIMC = ({ Imc, Info, data, GetBack }) => {
  
  const [actualSituation, setActualSituation] = useState("");

  useEffect(() => {
    switch (true) {
      case Imc < 0:
        setActualSituation("ERROR");
        break;
      case Imc < 18:
        setActualSituation("Magreza");
        break;
      case Imc < 25:
        setActualSituation("Normal");
        break;
      case Imc < 30 :
        setActualSituation("Sobrepeso");
        break;
      case Imc < 40 :
        setActualSituation("Obesidade");
        break;
      case Imc > 40 :
        setActualSituation("Obesidade Grave");
        break;
    }
  }, [Imc]);

  return (
    <div className="Container-Show">
      <div className="result">
        <p>O seu IMC é:</p>
        <p>{Imc}</p>
      </div>
      <div className="Table">
        <p> IMC </p>
        <p> Classificação </p>
        <p> Obesidade </p>
      </div>
      {data.map((item) => (
        <div key={item.info} className="Table">
          <p id='Classification'> {item.classification}</p>
          <p> {item.info}</p>
          <p> {item.obesity}</p>
        </div>
      ))}
      <p id='Situation'> Sua situação é <span>{actualSituation}</span> ! </p>

      <Button id="Voltar" Text="Voltar" action={GetBack}/>

    </div>
  );
};

export default ShowIMC;
