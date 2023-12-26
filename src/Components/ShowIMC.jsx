import React from 'react';

import './ShowIMC.css'

const ShowIMC = ({Imc ,Info, data}) => {

  return (
    <div className="Container">
    <p>O valor do IMC é:</p>
    <p>{Imc}</p>
        {data.map((item) => (
          <div key={item.info} className="Table">
            <p> {item.info}</p>
            <p> {item.classification}</p>
            <p> {item.obesity}</p> 
          </div>
        ))}
    </div>
  );
}

export default ShowIMC;
