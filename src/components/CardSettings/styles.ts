import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const WrapperConfig = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 75%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;
export const TitlePlayer = styled.h2`
  color: ${({ theme }) => theme.colors.black};
`;

export const ContainerPlayer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-around;
`;
