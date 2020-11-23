import React from 'react';
import './style.css'
import Api from '../../service/api.json'

function MensagemList({ match }){
  const [currentChannel, setCurrentChannel] = React.useState([])
  const [currentMessages, setCurrentMessages] = React.useState([])
  const messages = Api.messages
  const channels = Api.channels
  const users = Api.users
  const id = React.useMemo(
    () => match.params.id,
    [match.params.id]
  );
  React.useEffect(() => {
    async function loadingMessages() {
      console.log(`aqui você chama sua api passando o ${id}`)
      const data = channels.find(c => c.id === id)
      const dataMessages = messages.filter(msg => msg.channel_id === id)
      setCurrentChannel(data)
      setCurrentMessages(dataMessages)
    }

    loadingMessages()

  }, [id])

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
            {currentMessages.map(data =>(
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
