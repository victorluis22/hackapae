import ContentCards from '../../ContentCards'
import IconText from '../../IconText'
import Form from '../../Form'

import computerGif from '../../../assets/cadastroAssets/computer.gif'
import logoTop from '../../../assets/cadastroAssets/cadastro_icon_top.png'
import logoHalf from '../../../assets/cadastroAssets/cadastro_icon_half.png'
import logoBottom from '../../../assets/cadastroAssets/cadastro_icon_bottom.png'

import imgLeft from '../../../assets/cadastroAssets/cadastro_left_img.png'
import imgMid from '../../../assets/cadastroAssets/cadastro_mid_img.png'
import imgRight from '../../../assets/cadastroAssets/cadastro_right_img.png'

export default function Cadastro(){
    return(
        <div className="Home">
            <ContentCards>
                <div className="title">
                    <img src={computerGif} alt="GIF de um notebook" />
                    <h1>Workshop APAE</h1>
                </div>

                <div className="innerContent">
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
                </div>
            </ContentCards>

            <ContentCards cor="rgba(0,0,0,0)">
                <div className="images">
                    <img src={imgLeft} alt="" />
                    <img src={imgRight} alt="" />
                    <img src={imgMid} alt="" />
                </div>
            </ContentCards>

            <ContentCards cor="#39A3DF">
                <h1 style={{textAlign: 'center'}}>Inscrição</h1>
                <Form />
            </ContentCards>

        </div>
    )
}