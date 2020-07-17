import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';
import Resumen from './Resumen';
import Resultado from './Resultado';


class App extends Component {
  state = {
    resultado: '',
    datos: {}

  }

  //aqui se envian al formulario
  //datos es un objeto de auto
  cotizarSeguro = (datos) => {
    //console.log(datos);

    //obtener datos con destructuring
    const { marca, plan, year } = datos;

    //Agregar base de 2000
    //let porque se va a reescribir
    let resultado = 2000;

    //obtener la diferencia de a;os 
    const diferencia = obtenerDiferenciaAnio(year);
    //console.log('La diferencia es ' + diferencia);

    //por cada a;o restar 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;
    //console.log(resultado);

    //americano 15%,asiatico 5% y europeo 30% de incremento del valor actual
    resultado = calcularMarca(marca) * resultado;
    //console.log(resultado);

    //el plan del auto,el basico incrementa el valor 20% y cobertura complata 50%
    let incrementoPlan = obtenerPlan(plan);
    //console.log(incrementoPlan);

    //dependiedno del plan incrementa el resultado
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2); //ya esta el costo
    console.log(resultado);

    //crear objeto para el resumen
    const datosAuto = {
      marca: marca,
      plan: plan,
      year: year

    }

    this.setState({
      resultado: resultado, datos: datosAuto
    })

  }
  render() {
    return (
      <div className="contenedor">
        <Header
          titulo='Cotizador de Seguro de Auto'
        />
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />

          <Resumen
            //aqui se pasan como props del componente principal al hijo
            datos={this.state.datos} //este es un prop

          />
          <Resultado
            resultado={this.state.resultado}
          />
        </div>


      </div>
    );
  }
}


export default App;
