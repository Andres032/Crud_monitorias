import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'


class Crear extends React.Component{
    constructor(props) {
        super(props);
        this.state={
         nombremoni:"",
         programa:"",
         semestre:"",
         telefono:""
        }
    }
    
    changeHandler = e => {
      this.setState({ [e.target.name]: e.target.value })
    }
    
    submitHandler = e => {
      
      e.preventDefault()
      console.log(this.state)
      axios
        .post('http://localhost:9000/api', this.state)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })

        this.setState({
          nombremoni:"",
         programa:"",
         semestre:"",
         telefono:""
         })
    }
    
    
    render() {
      const{nombremoni,programa,semestre,telefono}=this.state
      
      
        return (
            <div className="card">
                <div className="card-header">
                    Monitores
                </div>
                <div className="card-body">
                   <form onSubmit={this.submitHandler}>
                       <div className="form-group">
                         <label htmlFor="">Nombre:</label>
                         <input type="text" name="nombremoni" onChange={this.changeHandler}value={nombremoni}  id="nombremoni" className="form-control" placeholder="" aria-describedby="helpId"/>
                         <small id="helpId" className="text-muted">Escribe el nombre completo</small>
                       </div>
                       <div className="form-group">
                         <label htmlFor="">Programa:</label>
                         <input type="text" name="programa" onChange={this.changeHandler} value={programa}  id="programa" className="form-control" placeholder="" aria-describedby="helpId"/>
                         <small id="helpId" className="text-muted">Escriba el programa academico</small>
                       </div>
                       <div className="form-group">
                         <label htmlFor="">Semestre:</label>
                         <input type="text" name="semestre" onChange={this.changeHandler}  value={semestre} id="semestre"  className="form-control" placeholder="" aria-describedby="helpId"/>
                         <small id="helpId" className="text-muted">Escriba el semestre</small>
                       </div>
                       <div className="form-group">
                         <label htmlFor="">Telefono:</label>
                         <input type="number" name="telefono" onChange={this.changeHandler} value={telefono}id="telefono"  className="form-control" placeholder="" aria-describedby="helpId"/>
                         <small id="helpId" className="text-muted">Escriba un telefono</small>
                       </div>
                       <div className="btn-group" role="group" aria-label="">
                           <button type="submit" className="btn btn-success">Agregar</button>
                           <Link to={"/"} class="btn btn-cancel">Cancelar</Link>
                           
                       </div>


                   </form>


                </div>
                <div className="card-footer text-muted">
                    
                </div>
            </div>
        )
    }
}

export default Crear;






 
