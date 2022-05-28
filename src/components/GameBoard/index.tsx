import React from 'react';

import { useBoard } from '../../hooks/useBoard';
import { MapFloor } from '../MapFloor';
import { PlayerPiece } from '../PlayerPiece';
import { PlayerTitle } from '../PlayerTitle';

import { Board, Container } from './styles';

export const GameBoard = () => {
  const { positionsFloor, handleOnDrop, handleAllowDrop, handleOnDragStart } =
    useBoard();

  return (
    <Container>
      <PlayerTitle mode='BETA' />
      <Board onDrop={handleOnDrop} onDragOver={handleAllowDrop}>
        {positionsFloor.map((item) => (
          <MapFloor
            key={item.id}
            id={String(item.id)}
            color={item.color}
            isDraggable={item.isDraggable}
          >
            {item.isDraggable && item.colorPiece && (
              <PlayerPiece
                key={item.id}
                id={String(item.id)}
                isDraggable={item.isDraggable}
                onDragStart={handleOnDragStart}
                color={item.colorPiece}
              />
            )}
          </MapFloor>
        ))}
      </Board>
      <PlayerTitle mode='ALFA' />
    </Container>
  );
};
