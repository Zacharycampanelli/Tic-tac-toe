import { createContext, useContext, useReducer } from 'react';
import gameReducer, { initialState } from './reducer';

const GameContext = createContext(initialState);

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const setPlayers = (icon) => {
    dispatch({
      type: 'SET_PLAYER_INITIAL_PIECES',
      payload: icon,
    });
  };

  const setPlayerTwoCPU = (choice) => {
    dispatch({
      type: 'SET_PLAYERTWO_CPU',
      payload: choice,
    });
  };

  const setPlayerTurn = (player) => {
    dispatch({
      type: 'SET_PLAYER_TURN',
      payload: player,
    });
  };

  const setRoundWinner = (symbol, name) => {
    dispatch({
      type: 'SET_ROUND_WINNER',
      payload: {symbol, name},
    });
  };

  const setBoardPiece = (playerTurn, boardIndex) => {
    let piece = playerTurn === 'X' ? 'X' : 'O';
    dispatch({
      type: 'SET_BOARD_PIECE',
      payload: { piece, boardIndex },
    });
  };

  const setScore = (player) => {
        dispatch({
            type: 'SET_SCORE',
            payload: player
        })

  }

  const resetScore = () => {
    dispatch({ type: 'RESET_SCORE'})
  }

  const clearBoard = () => {
    dispatch({
        type: 'CLEAR_BOARD'
    })
  }

  const value = {
    playerOne: state.playerOne,
    playerTwo: state.playerTwo,
    playerTwoCPU: state.playerTwoCPU,
    playerTurn: state.playerTurn,
    board: state.board,
    roundWinner: state.roundWinner,
    scores: state.scores,
    setPlayers,
    setPlayerTwoCPU,
    setPlayerTurn,
    setRoundWinner,
    setBoardPiece,
    setScore, 
    resetScore,
    clearBoard
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('no game context');
  }
  return context;
};
export default useGameContext;
