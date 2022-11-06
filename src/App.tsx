import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { User } from "./components/User";
import { Formulario } from './components/Formulario';


function App() {
  return (
    <>
    <h1>Hola Mundo - TypeScript!</h1>
    <hr/>
    <Counter/>

    <User/>

    <h2>useEffect - useRef</h2>
    <hr/>
    <TimerPadre/>
    <h2>useReducer</h2>
    <hr/>     
    <ContadorRed/>

    <h2>CustomHooks</h2>
    <hr />
    <Formulario/>
    <br /><br /><br /><br />
    </>

  );
}

export default App;
