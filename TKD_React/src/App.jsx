import Banner from './components/banner'
import Header from './components/header'
import Mortes from './components/mortes'
import Epidemia from './components/epidemia'
import Contato from './components/contato'
import Footer from './components/footer'

function App() {
    return(
      <>
        <Header/>
        <Banner/>
        <Mortes/>
        <Epidemia/>
        <Contato/>
        <Footer/>
      </>
    )
}

export default App;