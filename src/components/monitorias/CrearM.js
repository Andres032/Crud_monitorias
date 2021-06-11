import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'


class CrearM extends React.Component{
    constructor(props) {
        super(props);
        this.state={
         nombremoni:"",
         materia:"",
         fecha:"",
         salon:""
        }
    }
    
    changeHandler = e => {
      this.setState({ [e.target.name]: e.target.value })
    }
    
    submitHandler = e => {
      
      e.preventDefault()
      console.log(this.state)
      axios
        .post('http://localhost:9000/monitorias', this.state)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })

        this.setState({
          nombremoni:"",
          materia:"",
          fecha:"",
          salon:""
         })
    }
    
    
    render() {
      const{nombremoni,materia,fecha,salon}=this.state
      
      
        return (
            <div className="card">
                <div className="card-header">
                    Monitoria
                </div>
                <div className="card-body">
                   <form onSubmit={this.submitHandler}>
                       <div className="form-group">
                         <label htmlFor="">Materia:</label>
                         <input type="text" name="materia" onChange={this.changeHandler}value={materia}  id="materia" className="form-control" placeholder="" aria-describedby="helpId"/>
                         <small id="helpId" className="text-muted">Escribe la materia</small>
                       </div>
                       <div className="form-group">
                         <label htmlFor="">Monitor:</label>
                         <input type="text" name="nombremoni" onChange={this.changeHandler} value={nombremoni}  id="nombremoni" className="form-control" placeholder="" aria-describedby="helpId"/>
                         <small id="helpId" className="text-muted">Escriba el monitor asignar</small>
                       </div>
                       <div className="form-group">
                         <label htmlFor="">Fecha:</label>
                         <input type="text" name="fecha" onChange={this.changeHandler}  value={fecha} id="fecha"  className="form-control" placeholder="" aria-describedby="helpId"/>
                         <small id="helpId" className="text-muted">Ej: 12/03/2021</small>
                       </div>
                       <div className="form-group">
                         <label htmlFor="">Salon:</label>
                         <input type="number" name="salon" onChange={this.changeHandler} value={salon}id="salon"  className="form-control" placeholder="" aria-describedby="helpId"/>
                         <small id="helpId" className="text-muted">Escriba el salon</small>
                       </div>
                       <div className="btn-group" role="group" aria-label="">
                           <button type="submit" className="btn btn-success">Agregar</button>
                           <Link to={"/monitorias"} class="btn btn-cancel">Cancelar</Link>
                           
                       </div>


                   </form>


                </div>
                <div className="card-footer text-muted">
                    
                </div>
            </div>
        )
    }
}

export default CrearM;




