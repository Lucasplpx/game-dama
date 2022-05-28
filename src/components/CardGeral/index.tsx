import React from 'react';
import { useBoard } from '../../hooks/useBoard';

import { Container, Title, Button, Wrapper } from './styles';

export const CardGeral = () => {
  const { handleRestartBoard } = useBoard();

  return (
    <Container>
      <Title>Geral</Title>
      <Wrapper>
        <Button type='button' onClick={handleRestartBoard}>
          Reiniciar peças
        </Button>
      </Wrapper>
    </Container>
  );
};
