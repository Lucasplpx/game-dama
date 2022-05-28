import React, { DragEvent } from 'react';

import { Container, Circle } from './styles';

interface Props {
  id: string;
  color?: string;
  onDragStart?: (e: DragEvent) => void;
  isDraggable?: boolean;
}

export const PlayerPiece = ({ id, color, isDraggable, onDragStart }: Props) => {
  return (
    <Container id={id} color={color}>
      <Circle
        id={id}
        color={color}
        draggable={isDraggable}
        onDragStart={onDragStart}
      ></Circle>
    </Container>
  );
};
