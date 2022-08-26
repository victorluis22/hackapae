import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import VLibras from '@djpfs/react-vlibras'

function App() {

  return (
    <div className="App">
      <VLibras forceOnload={true}/>
      <Header />
      <Content />
    </div>
  )
}

export default App
