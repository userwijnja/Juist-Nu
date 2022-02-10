import styled from 'styled-components';


export const AboutContainer = styled.div`
color: #000;
background: ${({lightBg}) => (lightBg ? '#fff' : '#fff')};
margin-top: 25px;

@media screen and (max-width:768px) {
    padding: 50px 0;  

}
`

export const AboutWrapper = styled.div`
display: grid;
z-index: 1;
height: 960px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;

@media screen and (max-width: 768px) {
    height: 1160px;
}

@media screen and (max-width: 480px) {
    height: 1200px;
}
`
export const AboutRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col2 col1'`)};


@media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 10px;
`

export const TopLine = styled.p`
color: #777;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`
margin-bottom: 22px;
font-size: 22px;
line-height: 1.1;
font-weight: 400;
color: ${({ lightText }) => (lightText ? '#777' : '#000')};

@media screen and (max-width: 480px) {
    font-size: 22px;
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
font-weight: 700;
line-height: 20px;
color: ${({ darkText }) => ( darkText ? '#000' : '#777')};

`

export const BtnWrap = styled.button`
display: flex;
justify-content: flex-start;
`

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
border-radius: 20%;

@media screen and (max-width: 480px){
    display:none;
}
`