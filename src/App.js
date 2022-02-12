
import './assets/css/App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
//Importar componentes
import Inicio from './components/Inicio';
import MenuAdministrador from './components/administrador/MenuAdmin';
import LoginEmpleado from './components/empleado/LoginEmpl';
function App() {
  return (
    <Router>
      <div>
        
        <Switch>
        <Route path="/loginempl">
            <LoginEmpleado/>
          </Route>
          <Route path="/menuadmin">
            <MenuAdministrador/>
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>

        </div>
    </Router>
  );
}

export default App;
