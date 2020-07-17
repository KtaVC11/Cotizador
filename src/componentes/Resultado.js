import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
//como el app ya tiene el componente resumen, se puede pasar ahi directamente
class Resultado extends Component {
    render() {
        const resultado = this.props.resultado;
        const mensaje = (!resultado) ? 'Elije Marca,Anio y Tipo de Seguro: ' : 'El total es: $';
        return (
            <div className="gran-total">
                {mensaje}
                <TransitionGroup component="span" className='resultado'>
                    <CSSTransition classNames="resultado" key={resultado} timeout={{ enter: 500, exit: 500 }}>
                        <span>{resultado}</span>
                    </CSSTransition>
                </TransitionGroup>
            </div>

        )
    }
}

export default Resultado;