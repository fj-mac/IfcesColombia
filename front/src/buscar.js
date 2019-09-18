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
      segunda:false,
      tamano:600,
      historial:"vacio"

    }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleAPIChange = this.handleAPIChange.bind(this);
      this.handleSizeChange = this.handleAPIChange.bind(this);
  }
  handleSizeChange(event){
    event.preventDefault();
    let valor=parseInt(event.target.value);
    this.setState({ tamano: valor }
    );
  }

  handleAPIChange(event) {
    this.setState({termino:false})
    let valor=event.target.value;
    this.setState({ ApiBuscada: valor }, ()=>{
      console.log("Se ha seleccionado el api: "+ valor)
    }
    );
  }
  concatenar(a,b){
    a=a.push(b);
  };

  handleSubmit(event) {
    this.setState({loading:true})
    this.setState({termino:false});
    event.preventDefault();
    let url=this.state.ApiBuscada;
    if(this.state.historial==="vacio"){
      this.setState({historial:url});
    }
    else
    {
      this.setState({segunda:true});
    }
    console.log("Hasta el momento el historial es: "+this.state.historial);
    this.setState({termino:false});
     this.setState({loading:true})
     fetch(url+"?$limit=99999&$offset=0")
      .then(response => response.json())
      .then(response => {
          let datos=response;
          this.setState({ datosAPI: datos });
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
          <h1>Ingrese el tamaño de la ventana que desea (recomentdado 600)</h1>
         <input id="input" type="text" className="form-control"
           onChange={this.handleSizeChange}/>
      </div>
      {this.state.segunda? <h1>Usted ya consulto el API: {this.state.historial}</h1>:<div></div>}
      <div className="row">
      <div className="col-md-5">
      </div>
      <div className="col-md-2">
       {this.state.loading? <div className="loader"></div>:<div></div>}
      </div>
        {this.state.termino? <h1>Sus resultados se evidencian a continuacion</h1>:<div></div>}
        {this.state.termino? <div><Navioo datos={this.state.datosAPI} altura={this.state.tamano}/></div>:<div></div>}
      </div>
    </div>
  )
}
}

export default buscar;
