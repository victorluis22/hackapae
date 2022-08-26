import './style.css'

export default function IconText(props){
    return(
        <div className="IconText">
            <img src={props.icon} alt={props.alt} />
            <h3>{props.text}</h3>
        </div>
    )
}