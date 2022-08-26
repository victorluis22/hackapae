import footerImage from '../../assets/footer_image.png'
import './style.css'

export default function Footer(){
    return (
        <div className="Footer">
            <h2>COPYRIGHT © 2022 - IPRJ HACK CLUB </h2>
            <img src={footerImage} alt="Imagem do footer" />
        </div>
    )
}