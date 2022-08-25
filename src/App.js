
import './App.css';
import Pagina1 from './componentes/Pagina1.jsx';
import Colores from './componentes/Colores.jsx'
import {Datos} from './componentes/contexto/Contexto.jsx'

function App() {
  return (
    <>
    <Datos>
        <div className="App">
          <Pagina1/>
          <Pagina1/>
          <Pagina1/>
        </div>
        <Colores />
      </Datos>
    </>
  );
}

export default App;
