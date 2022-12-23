import styled from "styled-components";

export const TarievenContainer = styled.div`
  height: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e9e4f0;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const TarievenWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 36px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const TarievenCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 740px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const TarievenIcon = styled.img`
  height: 158px;
  width: 158px;
  margin-top: 5px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const TarievenH1 = styled.h1`
  font-size: 2.5rem;
  color: rgb(92, 26, 92);
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
export const TarievenH2 = styled.h2`
  height: 120px;
  font-size: 28px;
  margin-bottom: 10px;
  color: rgb(92, 26, 92);
  font-weight: 400;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
export const TarievenP = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  text-align: center;
  margin-top: 105px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const TarievenH3 = styled.h3`
  font-size: 1rem;
  text-align: left;
  margin-top: -50px;
  margin-bottom: 20px;
  color: rgb(92, 26, 92);
  font-weight: 200;
`;
