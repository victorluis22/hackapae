import './style.css'

export default function ContentCards(props){
    return(
        <div className="ContentCards" style={{backgroundColor: `${props.cor ?? '#F2BE08'}`}}>
            {props.children}
        </div>
    )
}