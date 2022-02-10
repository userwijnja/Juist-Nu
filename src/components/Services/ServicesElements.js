import styled from 'styled-components'

export const ServicesContainer = styled.div`
height: 960px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: rgb(92, 26, 92);

@media screen and (max-width: 768px) {
    height: 2800px;
}

@media screen and (max-width: 480px) {
    height: 1400px;
}
`
export const ServicesWrapper = styled.div`
max-width: 1300px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 15px;
padding: 0;
margin-bottom: 10px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
    
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
   
   
}
`
export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
}
@media screen and (max-width: 480px) {
    margin-top: 5px;
    
}

`
export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 30px;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
}

@media screen and (max-width: 768px) {
    height: 120px;
    width: 120px;
}

@media screen and (max-width: 480px) {
    height: 120px;
    width: 120px;
}

`

export const ServicesH1 = styled.h1`
font-size: 2rem;
color: #fff;
margin-bottom: 20px;

@media screen and (max-width: 480px) {
    font-size: 1.5rem;
}
`
export const ServicesH2 = styled.h2`
height: 80px;
font-size: 18px;
margin-bottom: 10px;
color: rgb(92, 26, 92);
font-weight: 700;
text-align: center;

@media screen and (max-width: 768px) {
    font-size: 16px;
   
}

@media screen and (max-width: 480px) {
    font-size: 16px;
    
    
}
`
export const ServicesP = styled.p`
font-size: 20px;
max-width: 1200px;
text-align: center;
margin-bottom: 25px;
color: white;


@media screen and (max-width: 768px) {
    font-size: 16px;
    max-width: 340px;
    text-align: left;
}

@media screen and (max-width: 480px) {
    font-size: 16px;
    max-width: 340px;
    text-align: left;
}
`