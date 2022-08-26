import footerImage from '../../assets/footer_image.png'
import './style.css'

import ContentCards from '../ContentCards'

import uerj from '../../assets/uerj.png'
import iprj from '../../assets/iprj.png'
import apae from '../../assets/apae.png'

export default function Footer(){
    return (
        <div className='Footer'>
            <ContentCards cor="rgba(0,0,0,0)">
                <div className="images">
                    <img src={apae} alt="" />
                    <img src={iprj} alt="" />
                    <img src={uerj} alt="" />
                </div>
            </ContentCards>
            <div className="footer">
                <h2>COPYRIGHT © 2022 - IPRJ HACK CLUB </h2>
                <img src={footerImage} alt="Imagem do footer" />
            </div>
        </div>
    )
}