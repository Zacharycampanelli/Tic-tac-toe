import X from '../images/icon-x.svg';
import O from '../images/icon-o.svg';

export const initialState = {
    playerOne: 'X',
    playerTwo: 'O',
    playerTwoCPU: null,
    playerTurn: null,
    playerOneSpaces: [],
    playerTwoSpaces: [],
    board: Array(9).fill().map((_, i) => i + 1)
}

const gameReducer = (initialState, action) => {
    switch(action.type) {
        case 'SET_PLAYER_INITIAL_PIECES':
            let other = '';
            if (action.payload === 'X') other = 'O'
            else other = 'X'
            
            return {
                ...initialState,
                playerOne: action.payload,
                playerTwo: other,
                
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
                if(initialState.playerTurn === initialState.playerOne) {
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
        
            // case 'SET_BOARD_PIECE':
            //     return {
            //         ...initialState,
            //         board: [...initialState.board.filter(space => space.value !==  action.payload.boardSpace), action.payload.piece] = 
            //     }
        default:
            return initialState;
    }
}

export default gameReducer