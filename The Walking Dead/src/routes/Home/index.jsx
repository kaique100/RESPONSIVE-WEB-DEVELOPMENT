import Banner from '../../components/banner/banner.jsx'
import Mortes from '../../components/mortes/Mortes.jsx'
import Epidemia from '../../components/epidemia/epidemia.jsx'
import Contato from '../../components/contato/contato.jsx'

function index() {
    return(
        <>
           <Banner/>
           <Mortes/>
           <Epidemia/>
           <Contato/>
        </>
    )
}

export default index;