import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="contador">Contador</Link>
                </li>
                <li>
                    <Link to="contexto-exemplo">Exemplo utilizando Contaxt</Link>
                </li>
            </ul>
        </nav>
    )
}