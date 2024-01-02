import { Button, Image } from '@chakra-ui/react';
import useGameContext from '../assets/theme/context';
import X from '../assets/images/icon-x.svg';
import O from '../assets/images/icon-O.svg';
import { useEffect, useState } from 'react';

const Square = ({ value }) => {
  const { board, playerTurn, roundWinner } = useGameContext();
  let [icon, setIcon] = useState(null);
  const addPiece = () => {
  
    if(!roundWinner && icon === null) {
      playerTurn === 'X' ? setIcon(X) : setIcon(O);
    }
  };

  useEffect(() => {
    if(board[value] === null) setIcon(null)
  }, [board[value]])
  
  return (
    <Button bg="darkBlue" variant="none" value={value} w="96px" h="96px" margin="0" onClick={addPiece}             sx={{ boxShadow: '0px -8px 0px 0px #10212A inset' }}
    >
      <Image src={icon} />
    </Button>
  );
};

export default Square;
