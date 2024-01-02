import X from '../images/icon-x.svg';
import O from '../images/icon-o.svg';

export const initialState = {
    playerOne: {symbol:'X', name: 'playerOne'},
    playerTwo: {symbol:'O', name: 'playerTwo '},
    playerTwoCPU: null,
    playerTurn: 'X',
    playerOneSpaces: [],
    playerTwoSpaces: [],
    roundWinner: null,
    board: Array(9).fill(null)
}

const gameReducer = (initialState, action) => {
    switch(action.type) {
        case 'SET_PLAYER_INITIAL_PIECES':
            // let 
            let other = '';
            if (action.payload === 'X') other = 'O'
            else other = 'X'
            
            return {
                ...initialState,
                playerOne: {symbol: action.payload, name: 'playerOne'},
                playerTwo: {symbol: other, name: 'playerTwo'},
                
            }
            case 'SET_PLAYERTWO_CPU':
                return {
                    ...initialState,
                    playerTwoCPU: action.payload,
                    
                }
            case 'SET_PLAYER_TURN':
            
                return {
                    ...initialState,
                    playerTurn: action.payload
                }
            case 'SET_PLAYER_SPACES':
                if(initialState.playerTurn === initialState.playerOne.symbol) {
                    let temp = [...initialState.playerOneSpaces, Number(action.payload)]
                    return {
                        ...initialState, 
                        playerOneSpaces: temp
                    }
                }
                else {
                    let temp = [...initialState.playerTwoSpaces, Number(action.payload)]
                    return {
                        ...initialState, 
                        playerTwoSpaces: temp
                    }
                }
                case 'SET_ROUND_WINNER':
                    return {
                        ...initialState,
                        roundWinner: action.payload
                    }

            case 'SET_BOARD_PIECE':
                let temp = [...initialState.board]
                temp[action.payload.boardIndex] = action.payload.piece
                return {
                    ...initialState,
                    board: [ ...temp] 
                }
        default:
            return initialState;
    }
}

export default gameReducer