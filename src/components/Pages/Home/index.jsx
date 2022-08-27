import './style.css'
import ContentCards from '../../ContentCards'
import Lista from '../../Lista'

import image1 from '../../../assets/homeAssets/home_1.png'
import image2 from '../../../assets/homeAssets/home_2.png'
import agendaIcon from '../../../assets/homeAssets/icon_agenda.png'

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

            <ContentCards cor='#B10808'>
                <div className="home-top-container">
                    <img src={image2} alt="Imagem de uma reunião" />
                    <div className="innerContent">
                        <div className="home-top">
                            <h2>Qual Objetivo?</h2>
                            <p>A proposta principal consiste em deslocar mais jovens para conhecer a APAE, visando a propagação de conhecimentos e o despertar do lado voluantário de cada um. </p>
                        </div>
                    </div> 
                </div>
            </ContentCards>

            <ContentCards cor='#39A3DF'>
                    <div className="innerContent">
                        <div className="home-top">
                            <h2>Data do Evento</h2>
                            <div className="home-content">
                                <Lista listaTitulo='De 30/10/22 a 01/03/23' icon={agendaIcon}>
                                    <ul style={{
                                        listStyleType: 'none',
                                        marginTop: 0
                                    }}>
                                        <li> {"> "} A cada semana o WorkShop irá abordar um tema</li>
                                    </ul>
                                </Lista>

                                <Lista listaTitulo='De 30/10/22 A 30/11/22' icon={agendaIcon}>
                                    <ul style={{
                                        listStyleType: 'none',
                                        marginTop: 0
                                    }}>
                                        <li>{"> "}Semana 1: Python e C++</li>
                                        <li>{"> "}Semana 2: HTML E CSS</li>
                                        <li>{"> "}Semana 3: JAVASCRIPT</li>
                                        <li>{"> "}Semana 4: BANCO DE DADOS</li>
                                    </ul>
                                </Lista>

                                <Lista listaTitulo='De 10/01/23 A 10/02/23' icon={agendaIcon}>
                                    <ul style={{
                                        listStyleType: 'none',
                                        marginTop: 0
                                    }}>
                                        <li>{"> "}Semana 1: ODONTOLOGIA</li>
                                        <li>{"> "}Semana 2: FONOAUDIOLOGIA</li>
                                        <li>{"> "}Semana 3: BIOMEDICINA</li>
                                    </ul>
                                </Lista>

                                <Lista listaTitulo='De 10/02/23 A 01/03/23' icon={agendaIcon}>
                                    <ul style={{
                                        listStyleType: 'none',
                                        marginTop: 0
                                    }}>
                                        <li>{"> "}Semana 1: MARKETING DIGITAL</li>
                                        <li>{"> "}Semana 2: NEGOCIOS</li>
                                        <li>{"> "}Semana 3: JORNALISMO</li>
                                        <li>{"> "}Semana 4: ESTRATEGIAS PARA PROJETOS</li>
                                    </ul>
                                </Lista>
                            </div>
                        </div>
                    </div> 
            </ContentCards>
        </div>
    )
}


