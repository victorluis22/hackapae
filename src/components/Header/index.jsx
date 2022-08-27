import './style.css'
import LogoApae from '../../assets/logo_apae.png'
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <header className='Header'>
            <img className='header-image' src={LogoApae} alt="Logo da Apae"/>
            <div className="button-container">
                <Link className='header-button' to='/'>Evento</Link>
                <Link className='header-button' to='/cadastro'>Cadastro</Link>
                <Link className='header-button' to='/doacao'>Doações</Link>
            </div>
        </header>
    )
}