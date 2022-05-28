import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  height: 100vh;

  padding: 20px;

  background-color: ${({ theme }) => theme.colors.background_app};

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    height: initial;
    background-color: initial;
  }
`;

export const ItemUm = styled.div`
  grid-row: span 2;
  height: 100%;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border_card};
  padding: 10px;
  border-radius: 5px;
  background: url('./board_img.jpg') no-repeat center;
  background-size: cover;
`;

export const ItemDois = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background_settings};
  border: 1px solid ${({ theme }) => theme.colors.border_card};
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 1000px) {
    grid-area: 1;
  }
`;

export const ItemTres = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background_settings};
  border: 1px solid ${({ theme }) => theme.colors.border_card};
  padding: 10px;
  border-radius: 5px;
`;
