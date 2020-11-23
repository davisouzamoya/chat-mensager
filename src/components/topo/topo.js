import React from 'react';
import './style.css'

function Topo(props){
  
  function teste(){
    
  }

  return (
  <header className="component-topo">
      <div>
        <h3>#{props.title}</h3>
      </div>
    </header>
  );
}

export default Topo;
