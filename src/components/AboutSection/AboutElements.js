import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #000;
  background: ${({ lightBg }) => (lightBg ? "#e9e4f0;" : "#e9e4f0;")};
  height: 1020px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  main-bottom: 5px;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
    background: ${({ lightBg }) => (lightBg ? "#fff;" : "#fff;")};
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  background: white;

  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 960px;
    margin-top: 10px;
  }

  @media screen and (max-width: 480px) {
    height: 960px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col2 col1'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 20px;
`;

export const TopLine = styled.h1`
  font-size: 2.5rem;
  color: rgb(92, 26, 92);
  font-weight: 700;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 18px;
    margin-top: 5px;
  }
`;

export const Heading = styled.h1`
  margin: 0 0 10px 0;
  font-size: 22px;
  line-height: 1.1;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ lightText }) =>
    lightText ? "rgb(92, 26, 92)" : "rgb(92, 26, 92)"};

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ darkText }) =>
    darkText ? "rgb(92, 26, 92)" : "rgb(92, 26, 92)"};
`;

export const BtnWrap = styled.button`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  padding: 20px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  border-radius: 20%;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
