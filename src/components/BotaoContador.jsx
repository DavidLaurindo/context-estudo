import { useContext } from "react";
import ContadorContext from "../context/ContadorContext";

export default function BotaoContador(){
    const [total, setTotal] = useContext(ContadorContext)

    return(
        <div>
            <h3>{total}</h3>
            <button type="button" onClick={() => setTotal(total + 1)}>
                Contador
            </button>
        </div>
    )
}