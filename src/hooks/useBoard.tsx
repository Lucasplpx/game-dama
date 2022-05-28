/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  DragEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useTheme } from 'styled-components';

import data from '../data/initialPositionsFloor.json';

interface PositionBoard {
  id: number;
  color: string;
  isDraggable: boolean;
  colorPiece?: string;
  player?: number;
}

interface BoardContextData {
  positionsFloor: PositionBoard[];
  pieceColorOne: string;
  pieceColorTwo: string;
  setPieceColorOne: (color: string) => void;
  setPieceColorTwo: (color: string) => void;
  handleOnDrop: (e: DragEvent) => void;
  handleAllowDrop: (e: DragEvent) => void;
  handleOnDragStart: (e: DragEvent) => void;
  handleRestartBoard: () => void;
}

const BoardContext = createContext({} as BoardContextData);

interface BoardProviderProps {
  children: ReactNode;
}

export const BoardProvider = ({ children }: BoardProviderProps) => {
  const theme = useTheme();
  const [positionsFloor, setPositionsFloor] = useState<PositionBoard[]>(
    data.positions
  );

  const [pieceColorOne, setPieceColorOne] = useState(
    theme.colors.piece_color_one
  );
  const [pieceColorTwo, setPieceColorTwo] = useState(
    theme.colors.piece_color_two
  );

  const [startPiece, setStartPiece] = useState<number | null>(null);
  const [targetPiece, setTargetPiece] = useState<number | null>(null);

  const [colorSelect, setColorSelect] = useState('#000');
  const [selectPlayer, setSelectPlayer] = useState<number | undefined>(0);

  useEffect(() => {
    handleUpdateColorsBoard();
  }, [pieceColorOne, pieceColorTwo]);

  function handleUpdateColorsBoard() {
    setPositionsFloor((oldState) =>
      oldState.map((position) => {
        if (position.player === 1 && position.colorPiece) {
          position.colorPiece = pieceColorOne;
        }

        if (position.player === 2 && position.colorPiece) {
          position.colorPiece = pieceColorTwo;
        }

        return position;
      })
    );
  }

  useEffect(() => {
    if (startPiece && targetPiece) {
      setPositionsFloor((oldState) =>
        oldState.map((position) => {
          if (position.id === startPiece) {
            delete position.colorPiece;
            delete position.player;
          }

          if (position.id === targetPiece) {
            position.colorPiece = colorSelect;
            position.player = selectPlayer;
          }

          return position;
        })
      );

      setStartPiece(null);
      setTargetPiece(null);
    }
  }, [targetPiece]);

  function handleOnDrop(e: DragEvent) {
    if (e.target) {
      const element = e.target as HTMLDivElement;

      const id = element.getAttribute('id');

      const isDraggable = element.getAttribute('draggable');
      if (isDraggable === 'true') {
        setTargetPiece(Number(id));
      }
    }
  }

  function handleAllowDrop(e: DragEvent) {
    e.preventDefault();
  }

  function handleOnDragStart(e: DragEvent) {
    if (e.target) {
      const element = e.target as HTMLDivElement;
      const id = element.getAttribute('id');
      const colorElemnt = element.getAttribute('color');
      const isDraggable = element.getAttribute('draggable');

      if (isDraggable === 'true' && colorElemnt) {
        const idPiecePlayer = Number(id);

        const findedPiece = positionsFloor.find(
          (position) => position.id === idPiecePlayer
        );

        const idPlayer = findedPiece?.player;
        setSelectPlayer(idPlayer);
        setColorSelect(colorElemnt);
        setStartPiece(idPiecePlayer);
      }
    }
  }

  async function handleRestartBoard() {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/positions`
    ).then((res) => res.json());

    setPositionsFloor(data.positions);
    setPieceColorOne(theme.colors.piece_color_one);
    setPieceColorTwo(theme.colors.piece_color_two);
  }

  return (
    <BoardContext.Provider
      value={{
        positionsFloor,
        handleOnDrop,
        handleAllowDrop,
        handleOnDragStart,
        handleRestartBoard,
        pieceColorOne,
        pieceColorTwo,
        setPieceColorOne,
        setPieceColorTwo,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => {
  return useContext(BoardContext);
};
