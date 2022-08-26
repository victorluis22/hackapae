import './style.css'
import Cadastro from '../Pages/Cadastro'
import Home from '../Pages/Home'
import { Route, Routes } from 'react-router-dom'

export default function Content(){
    return(
        <div className="Content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                {/* <Route path="/doacao" element={<Doacao />} /> */}
            </Routes>
        </div>
    )
}