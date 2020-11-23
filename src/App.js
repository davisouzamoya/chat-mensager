import './app.css'
import Menu from './components/menu/menu'
import Topo from './components/topo/topo'
import Mensagem from './components/Mensagem/Mensagem'
import MensagemList from './components/MensagemList/MessageList'

function App(){
  return (
    <div className="App">
      <Menu/>
      <Topo/>
      <MensagemList/>
      <Mensagem/>
    </div>
  );
}

export default App;
