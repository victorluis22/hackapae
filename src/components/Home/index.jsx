import ContentCards from '../ContentCards'
import IconText from '../IconText'
import Form from '../Form'

import computerGif from '../../assets/homeAssets/computer.gif'
import logoTop from '../../assets/homeAssets/home_icon_top.png'
import logoHalf from '../../assets/homeAssets/home_icon_half.png'
import logoBottom from '../../assets/homeAssets/home_icon_bottom.png'

import imgLeft from '../../assets/homeAssets/home_left_img.png'
import imgMid from '../../assets/homeAssets/home_mid_img.png'
import imgRight from '../../assets/homeAssets/home_right_img.png'

export default function Home(){
    return(
        <div className="Home">
            <ContentCards>
                <div className="title">
                    <img src={computerGif} alt="GIF de um notebook" />
                    <h1>Workshop APAE</h1>
                </div>

                <h2 style={{textAlign: 'center'}}>Venha participar do nosso Workshop</h2>
                <IconText 
                    icon={logoTop} 
                    alt="Lâmpada com engrenagem dentro" 
                    text="Aprenda os mais diversos conteúdos e tecnologias atuais"
                />

                <IconText 
                    icon={logoHalf} 
                    alt="Mão com chave de rosca" 
                    text="Construa um projeto prático"
                />

                <IconText 
                    icon={logoBottom} 
                    alt="Mão entregando produto" 
                    text="Ajude a APAE a continuar com seu importante trabalho social"
                />
            </ContentCards>

            <ContentCards cor="rgba(0,0,0,0)">
                <div className="images">
                    <img src={imgLeft} alt="" />
                    <img src={imgMid} alt="" />
                    <img src={imgRight} alt="" />
                </div>
            </ContentCards>

            <ContentCards>
                <h1 style={{textAlign: 'center'}}>Inscrição</h1>
                <Form />
            </ContentCards>
        </div>
    )
}