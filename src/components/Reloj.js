/* eslint-disable no-useless-constructor */
import React from "react";
import Hora from "./Hora";

class Reloj extends React.Component {
    constructor(props) {
        super(props);      
        this.state = {
            fecha: new Date(),
            fecha2: new Date()
        }

        console.log(this.state.fecha);
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tickTimer1(),
            1000
        )

        this.timer2 = setInterval(
            () => this.tickTimer2(),
            3000
        )
    }
    
    componentWillUnmount() {
        clearInterval(this.timer)
        clearInterval(this.timer2)
    }

    tickTimer1() {
        // this.state.fecha = new Date();
        this.setState({
            fecha: new Date()
        })
    }

    tickTimer2() {
        // this.state.fecha = new Date();
        this.setState({
            fecha2: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <Hora 
                    hora={this.state.fecha} 
                    color="blue"    
                />
                <Hora 
                    hora={this.state.fecha2} 
                    color="red"    
                />
            </div>
        )
    }
}

export default Reloj;
