import { Card, CardHeader, CardFooter } from '@chakra-ui/react';

import TogglePlayer from './TogglePlayer';
import './toggle.css';


const SelectPlayer = ({playerOne, setPlayerOne}) => {
  return (
    <Card backgroundColor="darkBlue" borderRadius="15px" marginBottom="1em">
    <CardHeader w="90vw" textStyle="h4" textAlign="center" fontSize={{ sm: '14px', md: '16px' }} color="blueGray" padding="1.5em">
      PICK PLAYER 1’S MARK
    </CardHeader>
   <TogglePlayer playerOne={playerOne} setPlayerOne={setPlayerOne}/>
    <CardFooter textStyle="p" w="100%" justifyContent="center" color="blueGray" opacity="0.5" padding="1.5em">
    REMEMBER: X GOES FIRST
    </CardFooter>
  </Card>
  )
}

export default SelectPlayer
