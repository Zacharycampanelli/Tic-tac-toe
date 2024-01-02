import { Box, GridItem } from '@chakra-ui/react';
import useGameContext from '../assets/theme/context';
  
const Footer = () => {

    const { playerOne, playerTwo, playerTwoCPU, scores} = useGameContext()
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

        >X ({playerTwoCPU ? 'YOU' : playerOne.symbol === 'O' ? 'P2' : 'P1'}) <Box textStyle="h3" fontWeight="normal">{scores.p1}</Box></GridItem>
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
        >O ({playerTwoCPU ? 'CPU' : playerTwo.symbol === 'O' ? 'P2' : 'P1'}) <Box textStyle="h3" fontWeight="normal">{scores.p2}</Box></GridItem>
    </>
  )
}

export default Footer
