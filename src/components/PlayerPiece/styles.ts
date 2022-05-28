import styled from 'styled-components';

export const Container = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;

  border: 2px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;

export const Circle = styled.div`
  height: 37px;
  width: 37px;
  border-radius: 50%;
  border: 1px solid black;

  background-color: ${({ color }) => color};
  cursor: grab;
`;
