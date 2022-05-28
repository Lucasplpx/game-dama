import React, { ReactNode } from 'react';
import { PlayerPiece } from '../PlayerPiece';

import { Container } from './styles';

interface Props {
  id?: string;
  color: string;
  children?: ReactNode;
  isDraggable: boolean;
}

export const MapFloor = ({ id, color, isDraggable, children }: Props) => {
  return (
    <Container id={id} color={color} draggable={isDraggable}>
      {children}
    </Container>
  );
};
