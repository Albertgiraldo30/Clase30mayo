import { Link } from "react-router-dom"

let Nofound =() =>{
    return(
        <>
        <h1>LA PAGINA NO EXISTE</h1>
        <Link className="btn btn-success" to="/">Ir a inicio</Link>
        </>
    )
}

export default Nofound;