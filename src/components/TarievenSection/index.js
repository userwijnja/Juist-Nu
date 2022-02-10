import React from 'react'
import { TarievenContainer, TarievenH1, TarievenWrapper, TarievenCard, TarievenIcon, TarievenH2, TarievenP } from './TarievenElements'

import Icon4 from '../../images/logo.png'

const Tarieven = () => {
    return (
    
            <TarievenContainer id="tarieven">
            <TarievenH1>Tarieven</TarievenH1>
            <TarievenWrapper>
                <TarievenCard>
             
             <TarievenH2>- Intakegesprek, 30 tot 45 min: €30,-*</TarievenH2>
             <TarievenH2>- Wandelcoaching 1,5uur: €80,-</TarievenH2>
             <TarievenH2>- 3x wandelcoaching á 1,5uur: €220,-</TarievenH2>
             <TarievenIcon src={Icon4}/>
                </TarievenCard>
                <TarievenCard>         
               
                <TarievenH2>- 6x wandelcoaching á 1,5uur: €420,-</TarievenH2>
                <TarievenH2>- Eetbare Wildplanten wandeling, 2 uur: €70,-</TarievenH2>
                <TarievenH2>- Groepswandeling vanaf 3 personen, 2 uur: €50,- per persoon</TarievenH2>
                <TarievenP>*Fysiek of telefonisch. Wordt in mindering gebracht bij de eerste sessie.</TarievenP>
                <TarievenP>Er wordt gezorgd voor water of thee en een kleine versnapering tijdens de wandeling.</TarievenP>
                </TarievenCard>

                
                
            </TarievenWrapper>

    
        </TarievenContainer> 
        
    )
}

export default Tarieven
