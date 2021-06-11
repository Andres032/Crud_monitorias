
import React from 'react';
import Monitores from './components/monitores/Monitores';
import Crear from './components/monitores/Crear';
import Editar from './components/monitores/Editar';
import home from './components/home/home';
import  Monitorias from './components/monitorias/Monitorias';
import CrearM from './components/monitorias/CrearM';
import EditarM from './components/monitorias/EditarM';

import { Route, BrowserRouter as Router} from 'react-router-dom';
import {Link} from 'react-router-dom';

function App() {

  

  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="nav navbar-nav">
              <Link className="navbar-brand" to={"/"}></Link>
              <Link className="navbar-brand" to={"/"}>Sistema</Link>
                  <Link className="nav-item nav-link" to={"/Monitores"}>Monitores</Link>
                  <Link className="nav-item nav-link" to={"/Monitorias"}>Monitorias</Link>
              </div>
          </nav>
       <div className="container">
         <br></br>
         <Route exact path="/" component={home}></Route>
        <Route exact path="/home" component={home}></Route>
        <Route path="/monitores" component={Monitores}></Route>
        <Route path="/crear" component={Crear}></Route>
        <Route path="/editar/:id" component={Editar}></Route>
        <Route path="/monitorias" component={Monitorias}></Route>
        <Route path="/crearm" component={CrearM}></Route>
        <Route path="/editarm" component={EditarM}></Route>
       
     
       </div>
       </Router>
  );
}

export default App;
