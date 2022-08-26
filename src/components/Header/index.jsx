import './style.css'
import LogoApae from '../../assets/logo_apae.png'

export default function Header(){
    return (
        <header className='Header'>
            <img className='header-image' src={LogoApae} alt="Logo da Apae" />
            <div className="button-container">
                <button className='header-button'>Evento</button>
                <button className='header-button'>Cadastro</button>
                <button className='header-button'>Doações</button>
            </div>
        </header>
    )
}