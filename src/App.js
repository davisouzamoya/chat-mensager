import './app.css'
import Menu from './components/menu/menu'
import Topo from './components/topo/topo'
import Mensagem from './components/Mensagem/Mensagem'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'

function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Topo/>
        <Routes />
        <Mensagem/>
      </BrowserRouter>
    </div>
  );
}

export default App;
