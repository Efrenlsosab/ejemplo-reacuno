import React, { useState } from "react";

const Ejemplo1 = ( ) => {
const [palabra, setPalabra] = useState("hola soy alexa");
return(
    <div>
        <h1> 
    {palabra}
    
    </h1>
    <button onClick ={ () => {setPalabra("hola leonardo")}}>
        boton
    </button>
    </div>
)
}

export default Ejemplo1;