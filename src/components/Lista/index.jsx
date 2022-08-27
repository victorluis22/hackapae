import './style.css'

export default function Lista(props){
    return(
        <div className="Lista">
            <div className='listaTitulo'>
                <img src={props.icon} alt="Icone de agenda" />
                <p>{props.listaTitulo}</p>
            </div>
            {props.children}
        </div>
    )
}