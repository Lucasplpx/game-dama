import React, { useState } from 'react';
import { useBoard } from '../../hooks/useBoard';
import { PickerColor } from '../PickerColor';

import {
  Container,
  Title,
  ContainerPlayer,
  TitlePlayer,
  WrapperConfig,
} from './styles';

export const CardSettings = () => {
  const { pieceColorOne, pieceColorTwo, setPieceColorOne, setPieceColorTwo } =
    useBoard();

  return (
    <Container>
      <Title>Configurações de Estilo</Title>
      <WrapperConfig>
        <ContainerPlayer>
          <TitlePlayer>Jogador Alfa</TitlePlayer>
          <PickerColor
            title='Cor das peças'
            name='picker1'
            value={pieceColorOne}
            onChange={(e) => setPieceColorOne(e.target.value)}
          />
        </ContainerPlayer>

        <ContainerPlayer>
          <TitlePlayer>Jogador Beta</TitlePlayer>
          <PickerColor
            title='Cor das peças'
            name='picker2'
            value={pieceColorTwo}
            onChange={(e) => setPieceColorTwo(e.target.value)}
          />
        </ContainerPlayer>
      </WrapperConfig>
    </Container>
  );
};
