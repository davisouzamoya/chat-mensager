import React from 'react';
import './style.css'
import Api from '../../service/api.json'

function Mensagem(){
  return (
    <div className="component-mensagem">
      <div className="input-group">
        <input className="component-input" placeholder="Message channel"/>
      </div>
      
  </div>
  );
}

export default Mensagem;
