import './style.css'
import FormInput from '../FormInput'

export default function Form(){
    return(
        <div className="Form">
            <FormInput label="Nome" />
            <FormInput label="Email" />
            <button>Inscrever</button>
        </div>
    )
}