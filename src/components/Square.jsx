import { Button, Image } from '@chakra-ui/react';
import useGameContext from '../assets/theme/context';
import X from '../assets/images/icon-x.svg';
import O from '../assets/images/icon-O.svg';
import { useState } from 'react';

const Square = ({ value }) => {
  const { playerTurn, roundWinner } = useGameContext();
  let [icon, setIcon] = useState();
  console.log(value)
  const addPiece = () => {
  
    if(!roundWinner) {
      playerTurn === 'X' ? setIcon(X) : setIcon(O);
    }
  };
  
  return (
    <Button bg="darkBlue" variant="none" value={value} w="96px" h="96px" margin="0" onClick={addPiece}>
      <Image src={icon} />
    </Button>
  );
};

export default Square;
