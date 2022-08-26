import './style.css'

export default function FormInput(props){
    return(
        <div className="FormInput">
            <label>{props.label}</label>
            <input type="text"/>
        </div>
    )
}