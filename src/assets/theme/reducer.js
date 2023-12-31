export const initialState = {
    playerOne: 'X',
    playerTwo: 'O',
    playerTwoCPU: null,
    playerTurn: null,
    playerOneSpaces: [],
    playerTwoSpaces: [],
    board: Array(9).fill(null)
}

const gameReducer = (initialState, action) => {
    switch(action.type) {
        case 'SET_PLAYER_PIECES':
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
        default:
            return initialState;
    }
}

export default gameReducer