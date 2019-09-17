import React, { Component } from "react";
import "./buscar.css";
import Navioo from "./Navioo.js";

class buscar extends Component  {
 constructor(props){
    super(props);
    this.state = {
      ApiBuscada: "",
      datosAPI: [],
      loading:false,
      termino:false,
      tamano:600

    }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleAPIChange = this.handleAPIChange.bind(this);
  }

  handleAPIChange(event) {
    let valor=event.target.value;
    this.setState({ ApiBuscada: valor }, ()=>{
      console.log("Se ha seleccionado el api: "+ valor)
    }
    );
  }

  handleSubmit(event) {
     event.preventDefault();
     let url=this.state.ApiBuscada;
    this.setState({loading:true})
     fetch(url)
      .then(response => response.json())
      .then(response => {
          let datos=response;
          this.setState({ datosAPI: datos });
          console.log(this.state.datosAPI);
          this.setState({loading:false});
          this.setState({termino:true});
      })
      .catch(error=>console.log("No sirve el fetch", error))
  }


render(){

  return (
    <div>
      <h1>Datos.gov.co Visualizacion</h1>
      <div className="row">
      <h1>Ingrese el api a consultar: </h1>
        <div className="col-md-10">

          <input id="input" type="text" className="form-control"
           onChange={this.handleAPIChange}

          />
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-secondary" value={this.state.ApiBuscada}
          onClick={this.handleSubmit}
          >Buscar</button>
        </div>
      </div>
      <div className="row">
      <div className="col-md-5">
      </div>
      <div className="col-md-2">
       {this.state.loading? <div className="loader"></div>:<div></div>}
      </div>
        {this.state.termino? <div><Navioo datos={this.state.datosAPI} altura={this.state.tamano}/></div>:<div></div>}

      </div>
    </div>
  )
}
}

export default buscar;
