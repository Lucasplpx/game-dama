import type { NextPage } from 'next';
import { CardGeral } from '../../components/CardGeral';
import { CardSettings } from '../../components/CardSettings';
import { GameBoard } from '../../components/GameBoard';
import { Container, ItemDois, ItemTres, ItemUm } from './styles';

export const Game: NextPage = () => {
  return (
    <Container>
      <ItemUm>
        <GameBoard />
      </ItemUm>

      <ItemDois>
        <CardSettings />
      </ItemDois>

      <ItemTres>
        <CardGeral />
      </ItemTres>
    </Container>
  );
};
