import { Button, Image } from '@chakra-ui/react';
import useGameContext from '../assets/theme/context';
import X from '../assets/images/icon-x.svg';
import O from '../assets/images/icon-O.svg';
import X_outline from '../assets/images/icon-x-outline.svg';
import O_outline from '../assets/images/icon-O-outline.svg';
import { useEffect, useState } from 'react';

const Square = ({ value, playerClick }) => {
  const { playerOne, playerTwo, playerTwoCPU, board, playerTurn, roundWinner } = useGameContext();
  let [icon, setIcon] = useState(null);
  let [hoverIcon, setHoverIcon] = useState('');
  let [hover, setHover] = useState(false);
  const [display, setDisplay] = useState('hidden')
  // const addPiece = () => {
  
  //   if(!roundWinner && icon === null) {
  //     playerTurn.symbol === 'X' ? setIcon(X) : setIcon(O);
  //   }
  // };

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
  
  return (
    <Button bg="darkBlue" variant="none" value={value} onClick={playerClick} onMouseDown={() => setDisplay(false)} onMouseOver={isHover} onMouseLeave={isNotHover} backgroundImage={board[value] === null && hoverIcon} backgroundPosition="center" backgroundRepeat="no-repeat" boxSize={{sm: "96px", md: "140px"}} margin="0" sx={{ boxShadow: '0px -8px 0px 0px #10212A inset' }}
    >
      <Image src={icon} /> 
      {display && <Image src={hoverIcon} />}
    </Button>
  );
};

export default Square;
