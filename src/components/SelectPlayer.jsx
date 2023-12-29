import { Card, CardHeader, CardFooter } from '@chakra-ui/react';

import TogglePlayer from './TogglePlayer';
import './toggle.css';
import useGameContext from '../assets/theme/context';


const SelectPlayer = () => {
 
  return (
    <Card backgroundColor="darkBlue" borderRadius="15px" marginBottom="1em" w={{sm: "327px", md: "460px"}}>
    <CardHeader  textStyle="h4" textAlign="center" fontSize={{ sm: '14px', md: '16px' }} color="blueGray" padding="1.5em">
      PICK PLAYER 1’S MARK
    </CardHeader>
   <TogglePlayer />
    <CardFooter textStyle="p"  justifyContent="center" color="blueGray" opacity="0.5" padding="1.5em">
    REMEMBER: X GOES FIRST
    </CardFooter>
  </Card>
  )
}

export default SelectPlayer
