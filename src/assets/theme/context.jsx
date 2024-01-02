import { createContext, useContext, useReducer } from "react";
import gameReducer, { initialState } from "./reducer";

const GameContext = createContext(initialState);

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    const setPlayers = (icon) => {
        dispatch({
            type: 'SET_PLAYER_INITIAL_PIECES',
            payload: 
                 icon
            
        })
    }

    const setPlayerTwoCPU = (choice) => {
        console.log(choice)
        dispatch({
            type: 'SET_PLAYERTWO_CPU',
            payload: choice
        })
    }

    const setPlayerTurn = (player) => {
        dispatch({
            type: 'SET_PLAYER_TURN',
            payload: player
        })
    }

    const setPlayerSpaces = (space) => {
        dispatch({
            type: 'SET_PLAYER_SPACES',
            payload: space
        })
    }

    const setRoundWinner = (player) => {
        dispatch({ 
            type: 'SET_ROUND_WINNER',
            payload: player
        })
    }



    const setBoardPiece = (player, boardIndex ) => {
        let piece = player === 'X' ? 'X' : 'O'
        dispatch({
            type: 'SET_BOARD_PIECE',
            payload: {piece, boardIndex}
        })
    }

    const value = {
        playerOne: state.playerOne,
        playerTwo: state.playerTwo,
        playerTwoCPU: state.playerTwoCPU,
        playerTurn: state.playerTurn,
        playerOneSpaces: state.playerOneSpaces,
        playerTwoSpaces: state.playerTwoSpaces,
        board: state.board,
        roundWinner: state.roundWinner,
        setPlayers,
        setPlayerTwoCPU,
        setPlayerTurn,
        setPlayerSpaces,
        setRoundWinner,
    
        setBoardPiece
    }
return <GameContext.Provider value={value}>{children}</GameContext.Provider>

}

const useGameContext = () => {
    const context = useContext(GameContext);

    if(context === undefined) {
        throw new Error('no game context')
    }
    return context;
}
export default useGameContext;