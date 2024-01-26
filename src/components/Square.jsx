import { Button, Image } from '@chakra-ui/react';
import useGameContext from '../assets/theme/context';
import X from '../assets/images/icon-x.svg';
import O from '../assets/images/icon-O.svg';
import X_outline from '../assets/images/icon-x-outline.svg';
import O_outline from '../assets/images/icon-O-outline.svg';
import X_outline_filled from '../assets/images/icon-x-outline-filled.svg';
import O_outline_filled from '../assets/images/icon-O-outline-filled.svg';
import { useEffect, useState } from 'react';

const Square = ({ value, playerClick, winningSequence }) => {
  const { playerOne, playerTwo, playerTwoCPU, board, playerTurn, roundWinner } = useGameContext();
  let [icon, setIcon] = useState(null);
  let [hoverIcon, setHoverIcon] = useState('');
  let [hover, setHover] = useState(false);
  const [display, setDisplay] = useState('hidden')



 

  const isHover = () => {
    setHover(true)
  }

  const isNotHover = () => {
    setHover(false)
    setHoverIcon('')
  }

  const playerHover = () => {
    if(!roundWinner && icon === null && board[value] === null) {
      if(playerOne.symbol === playerTurn || (playerTwo.symbol === playerTurn && !playerTwoCPU) )
      playerTurn === 'X' ? setHoverIcon(X_outline) : setHoverIcon(O_outline);
    }  
  }

  useEffect(() => {
    console.log(hover)
    if(hover) 
    playerHover()
  },[hover])

  useEffect(() => {
    if(board[value] === null) setIcon(null)
    else {console.log(value) 
  setIcon(board[value] === 'X' ? X : O)}
  }, [board[value]])
  
  const getBackgroundColor = () => {
    console.log(roundWinner)
    if(!roundWinner) {
      return 'darkBlue'
    }
    if(roundWinner === 'X') {
      if(winningSequence.includes(value)) {
        return 'darkAqua'
      }
      }
      if(roundWinner === 'O') {
        if(winningSequence.includes(value)) {
          console.log(winningSequence)
          return 'orange'
        }
      }
    }
  
  
useEffect(() => {

  if (winningSequence.includes(value)) 
  {
  getBackgroundColor()
  if(roundWinner === 'X') {
    setIcon(X_outline_filled)
    }
    else if (roundWinner === 'O') {
      setIcon(O_outline_filled)
    }}
}, [winningSequence])

  return (
    <Button bg={getBackgroundColor} variant="none" value={value} onClick={playerClick} onMouseDown={() => setDisplay(false)} onMouseOver={isHover} onMouseLeave={isNotHover} backgroundImage={board[value] === null && hoverIcon} backgroundPosition="center" backgroundRepeat="no-repeat" boxSize={{sm: "96px", md: "140px"}} margin="0" sx={{ boxShadow: '0px -8px 0px 0px #10212A inset' }}    >
      <Image src={icon} /> 
      {display && <Image src={hoverIcon} />}
    </Button>
  );
};

export default Square;
