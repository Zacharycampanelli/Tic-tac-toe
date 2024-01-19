import { useEffect, useState } from 'react';
import { Button, Image } from '@chakra-ui/react';
import useGameContext from '../assets/theme/context';
import X from '../assets/images/icon-x.svg';
import O from '../assets/images/icon-O.svg';
import X_Outline from '../assets/images/icon-x-outline.svg';
import O_Outline from '../assets/images/icon-o-outline.svg';

const Square = ({ value }) => {
  const { board, playerTurn, playerTwoCPU, playerOne, playerTwo } = useGameContext();
  let [icon, setIcon] = useState(null);
let [hoverIcon, setHoverIcon] = useState(null);
 let temp
  // const hoverPiece = () => {
  //   if (board[value] !== 'X' && board[value] !== 'O') {
  //     setHoverIcon(value === 'X' ? X_Outline : O_Outline);
  //   }
  // }

  const tempIcon = () => {
    if(board[value] === null  )  {
      if((playerTurn === playerOne.symbol) || (!playerTwoCPU && playerTurn === playerTwo.symbol))
      playerTurn === 'X' ? temp = X_Outline : temp = O_Outline 
     setHoverIcon(temp)
      
    }
  }

  const tempIconRemove = () => {
    setHoverIcon(null)
  }


  useEffect(() => {
    console.log(value)
    if(board[value] === null) setIcon(null)
    else {console.log(value) 
  setIcon(board[value] === 'X' ? X : O)}
  }, [board[value]])
  
  return (
    <Button bg="darkBlue" onMouseOver={tempIcon} onMouseOut={tempIconRemove} variant="none" value={value} boxSize={{sm: "96px", md: "140px"}} margin="0" sx={{ boxShadow: '0px -8px 0px 0px #10212A inset' }}
    >
      {icon === null ? <Image src={hoverIcon} /> : null}
      <Image src={icon} />
    </Button>
  );
};

export default Square;
