import { Box, GridItem } from '@chakra-ui/react';
import useGameContext from '../assets/theme/context';
  
const Footer = () => {

    const { playerOne, playerTwo, playerTwoCPU, scores} = useGameContext()

    const determinePlayerLabels = (symbol) => {
      if(playerTwoCPU && playerOne.symbol === symbol) { return 'YOU' }
      if(playerTwoCPU && playerTwo.symbol === symbol) { return 'CPU' }
      if(!playerTwoCPU && playerOne.symbol === symbol) { return 'P1' }
      if(!playerTwoCPU && playerTwo.symbol === symbol) { return 'P2' }  
// (playerTwoCPU && playerOne.symbol === 'X') ? 'YOU' : playerOne.symbol === 'O' ? 'P2' : 'P1'
    }

  return (
    <>
        <GridItem
          w="96px"
          h="64px"
          padding="0"
          borderRadius="5px"
          bg="darkAqua"
          display="flex"

          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textStyle="subp"

        // >X ({(playerTwoCPU && playerOne.symbol === 'X') ? 'YOU' : playerOne.symbol === 'O' ? 'P2' : 'P1'}) <Box textStyle="h3" fontWeight="normal">{scores.p1}</Box></GridItem>
        >X ({determinePlayerLabels('X')}) <Box textStyle="h3" fontWeight="normal">{scores.p1}</Box></GridItem>
        <GridItem
          w="96px"
          h="64px"
          padding="0"
          borderRadius="5px"
          bg="blueGray"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textStyle="subp"
        >TIES <Box textStyle="h3" fontWeight="normal">{scores.ties}</Box></GridItem>
        <GridItem
          w="96px"
          h="64px"
          padding="0"
          borderRadius="5px"
          bg="orange"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textStyle="subp"
        >O ({determinePlayerLabels('O')}) <Box textStyle="h3" fontWeight="normal">{scores.p2}</Box></GridItem>
    </>
  )
}

export default Footer
