import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import VLibras from '@djpfs/react-vlibras'
import Footer from './components/Footer'

import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <VLibras forceOnload={true}/>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
