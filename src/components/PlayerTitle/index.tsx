import React from 'react';

import { Container, Title, SubTitle } from './styles';

interface Props {
  mode: string;
}

export const PlayerTitle = ({ mode }: Props) => {
  return (
    <Container>
      <Title>JOGADOR</Title>
      <SubTitle>{mode}</SubTitle>
    </Container>
  );
};
