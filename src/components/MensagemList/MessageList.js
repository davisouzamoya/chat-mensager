import React from 'react';
import './style.css'
import Api from '../../service/api.json'


function MensagemList(){
  console.log(Api)
  const messages = Api.messages
  const users = Api.users

  function BuscaNome(user){
    for(var i =0;i < users.length;i++){
      if(users[i].id === user){
          return users[i].username
      } 
    }
  }

  return (
    <div className="component-mensagem-list">
      <ul className="mensagemList">
            {messages.map(data =>(
              <li key={data.id}>
                <div className="mensagemList-chat">
                  <span className="Name">{BuscaNome(data.user_id)}</span>
                  <span className="Hour">{data.timestamp}</span>  
                </div>
                <div className="mensagem">{data.content}</div> 
              </li>
            ))}
      </ul>
  </div>
  );
}

export default MensagemList;
