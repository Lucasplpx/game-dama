import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
`;

export const Button = styled.button`
  height: 70px;
  width: 50%;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  font-size: 18px;
  font-weight: bold;

  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;
