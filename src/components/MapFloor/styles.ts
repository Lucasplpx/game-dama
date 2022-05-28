import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: ${({ draggable }) => (draggable ? 'grabbing' : 'no-drop')};
`;
