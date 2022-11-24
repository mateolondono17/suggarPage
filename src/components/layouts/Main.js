import Ayudas from "./Ayudas";
import Beneficiarios from "./Beneficiarios";
import Presupuesto from "./Presupuesto";

const Main = () =>{
    return(
        <main className="w-100 main">
            <section className="w-100 formularios">
            <Beneficiarios/>
            <Ayudas/>
            <Presupuesto/>
            </section>
        </main>

    )
}

export default Main;