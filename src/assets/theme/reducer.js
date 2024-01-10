import X from '../images/icon-x.svg';
import O from '../images/icon-o.svg';

export const initialState = {
  playerOne: { symbol: 'X' },
  playerTwo: { symbol: 'O' },
  playerTwoCPU: true,
  playerTurn: 'X',
  roundWinner: null,
  board: Array(9).fill(null),
  scores: { p1: 0, p2: 0, ties: 0 },
};

const gameReducer = (initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER_INITIAL_PIECES':
      // let
      let other = '';
      if (action.payload === 'X') other = 'O';
      else other = 'X';

      return {
        ...initialState,
        playerOne: { symbol: action.payload },
        playerTwo: { symbol: other },
      };

    case 'SET_PLAYERTWO_CPU':
      return {
        ...initialState,
        playerTwoCPU: action.payload,
      };

    case 'SET_PLAYER_TURN':
      return {
        ...initialState,
        playerTurn: action.payload,
      };

    case 'SET_ROUND_WINNER':
      return {
        ...initialState,
        roundWinner: action.payload,
      };

    case 'SET_BOARD_PIECE':
      let tempBoard = [...initialState.board];
      if (tempBoard[action.payload.boardIndex] === null) tempBoard[action.payload.boardIndex] = action.payload.piece;
      return {
        ...initialState,
        board: [...tempBoard],
      };
    case 'SET_SCORE':
      let tempScores = { ...initialState.scores };
      if (action.payload === 'tie') {
        tempScores.ties++;
      }
      else {
        initialState.playerOne.symbol === action.payload ? tempScores.p1++ : tempScores.p2++;

      }

      return {
        ...initialState,
        scores: { ...tempScores },
      };
    case 'RESET_SCORE':
      return {
        ...initialState,
        scores: { p1: 0, p2: 0, ties: 0 },
      };
    case 'CLEAR_BOARD':
      let emptyBoard = Array(9).fill(null);
      return {
        ...initialState,
        board: [...emptyBoard],
        roundWinner: null,
        playerTurn: 'X',
      };

    default:
      return initialState;
  }
};

export default gameReducer;
