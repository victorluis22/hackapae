import './style.css'
import ContentCards from '../../ContentCards'

import image1 from '../../../assets/homeAssets/home_1.png'
import image2 from '../../../assets/homeAssets/home_2.png'

export default function Home(){
    return (
        <div className="Home">
            <ContentCards>
                <div className="home-top-container">
                    <div className="innerContent">
                        <div className="home-top">
                            <h2>Como funciona?</h2>
                            <p>Esse workshop tem como idéia base a integração e promoção de conhecimentos. Assim, esse projeto será palestrado por granduandos das diversas falculdades da região de nova friburgo, em que os mesmos iriam disponibilizar informações para o público referente as áreas que estudam. </p>
                        </div>
                    </div>
                    <img src={image1} alt="Imagem de uma reunião" />
                </div>
            </ContentCards>
        </div>
    )
}