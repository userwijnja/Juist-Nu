import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import Icon1 from '../../images/Icon-1.jpg'
import Icon2 from '../../images/Icon-2.jpeg'
import Icon3 from '../../images/Icon-3.jpg'
import Icon4 from '../../images/Icon-4.jpg'
import Icon5 from '../../images/Icon-5.jpg'
import Icon6 from '../../images/Icon-6.jpg'
import Icon7 from '../../images/Icon-7.jpg'
import Icon8 from '../../images/Icon-8.jpg'

const Services = () => {
    return (
        <ServicesContainer id="werkwijze">
            <ServicesH1>Werkwijze</ServicesH1>
            <ServicesP>Ik ondersteun vrouwen tussen de 25 en 95 jaar om zich van een leven waarin ze zichzelf steeds voorbij lopen, 
                    naar een energiek bestaan in balans te ontwikkelen. Dit doe ik onder andere als wandelcoach doormiddel van groepswandelingen en eetbare wildplanten- en kruidenwandelingen.  
                    Hiernaast ben ik bekend met de volgende technieken:</ServicesP>
            <ServicesWrapper>

                <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Voedings- en supplementadvies</ServicesH2>
                </ServicesCard>

                <ServicesCard>      
                <ServicesIcon src={Icon2}/>      
                <ServicesH2>Het gebruik van kruiden ten behoeve van je gezondheid</ServicesH2>
                </ServicesCard>

                <ServicesCard>
                <ServicesIcon src={Icon3}/>             
                <ServicesH2>Nederlandse Bloesem Remedies</ServicesH2>
                </ServicesCard>

                <ServicesCard>         
                <ServicesIcon src={Icon6}/>
                <ServicesH2>Spring Forest Qigong behandeling</ServicesH2>
                
                </ServicesCard>
                </ServicesWrapper>
                <ServicesWrapper>
                <ServicesCard>         
                <ServicesIcon src={Icon5}/>
                <ServicesH2>Kennis uit de Chinese energetica  </ServicesH2>
               
                </ServicesCard>

        
                <ServicesCard>         
                <ServicesIcon src={Icon7}/>
                <ServicesH2>Therapeutic healing behandeling</ServicesH2>
                </ServicesCard>



                <ServicesCard>         
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Neurolinguïstisch programmeren (NLP)</ServicesH2>
                </ServicesCard>

                <ServicesCard>         
                <ServicesIcon src={Icon8}/>   
                <ServicesH2>Mijn eigen ervaring en intuïtie</ServicesH2>
                </ServicesCard>
                
             
            </ServicesWrapper>


        </ServicesContainer>
    )
}

export default Services
