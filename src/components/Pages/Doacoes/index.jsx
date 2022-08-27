import './style.css'
import ContentCards from '../../ContentCards'
import Lista from '../../Lista/index.jsx'
import { useState } from 'react'
import tableIcon from '../../../assets/doacoesAssets/table.png'

export default function Doacoes(){

    const [textButton, setTextButton] = useState('SAIBA MAIS!')
    const [status, setStatus] = useState(false)

    function showHide(){
        if(status){
            setStatus(false)
            setTextButton('SAIBA MAIS!')
        }
        else{
            setStatus(true)
            setTextButton('MOSTRAR MENOS')
        }
    }

    return(
        <div className="Doacoes">
            <ContentCards>
                <div className="innerContent">
                    <div className="home-top">
                        <h2>Como Funciona O programa InCENTive?</h2>
                        <p>A Partir dos suas compras no seu cartão de crédito masterCard cadastrado, os centavos são arredondados, totalizando o valor inteiro, e depois o valor é doado por você para a APAE.
                        E mesmo que você use pouco seu cartão e não atinja o máximo mensal que você escolhe no cadastro, o valor é arredondao para R$ 5,00. </p>
                    </div>
                </div> 
            </ContentCards>

            <ContentCards cor='#B10808'>
                <div className="innerContent">
                    <div className="home-top">
                        <h2>InCENTive Plus</h2>
                        <p>Agora, com o programa inCENTive Plus o seu incentivo a APAE se reverte em beneficios a você. Acumule pontos com suas doações que se revertem em descontos nas nossas lojas parceiras.</p>

                        {
                            status ?
                            (   
                                
                                <div className="home-content">
                                    <p style={{textAlign: 'center'}}>Com o InCENTive Plus seu tempo doando para APAE se converte em benefícios para você.</p>
                                    <p style={{color: '#EBEF1F', textAlign: 'center'}}>Quanto maior o tempo, maior a recompensa.</p>
                                    <Lista listaTitulo='Tabela de Recompensas' icon={tableIcon}>
                                        <ul style={{
                                            listStyleType: 'none',
                                            marginTop: 0,
                                            lineHeight: 2
                                        }}>
                                            <li>{"> "}A cada semana o WorkShop irá abordar um tema</li>
                                            <li>{"> "}Período de um mês a cinco meses: 5% de Desconto nas lojas parceiras da APAE.</li>
                                            <li>{"> "}Período de 6 meses a 11 meses: 10% de Desconto nas lojas parceiras da APAE.</li>
                                            <li>{"> "}Período de um ano ou mais: 15% de Desconto nas lojas parceiras da APAE + nome no Banner de Agradecimento na página do Instagram.</li>
                                            <li>{"> "}OBS: A partir de uma semana de doações, você recebe passa-Livre para participar dos WorkShops APAE.</li>
                                        </ul>
                                    </Lista>
                                </div>
                            )
                            :<></>
                        }
                        <button className="botao" onClick={() => showHide()}>{textButton}</button>
                    </div>
                </div> 
            </ContentCards>

            <ContentCards cor='#39A3DF'>
                <div className="innerContent">
                    <div className="home-top">
                        <h2>Juntos Somos Mais!</h2>
                        <p>Se cada pessoa se conscientizar e contribuir a aPAE irá conseguir ajudar ainda mais pessoas de nova Friburgo</p>
                    </div>
                </div> 
            </ContentCards>
        </div>
    )
}