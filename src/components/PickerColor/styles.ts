import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 300px;
`;

export const LabelPicker = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    cursor: pointer;
  }
`;

export const ColorPicker = styled.input`
  &:hover {
    cursor: pointer;
  }
`;
