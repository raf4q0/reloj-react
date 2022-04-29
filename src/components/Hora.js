import React from "react";

function Hora(props) {
    return(
        <h3 style={{ color: props.color }}>La hora actual es: {props.hora ? props.hora.toLocaleTimeString() : '0:00:00'}</h3>
    )
}

export default Hora;
