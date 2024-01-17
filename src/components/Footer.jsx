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
          w={{sm: "96px", md: "140px"}}
          h={{sm: "64px", md: "72px"}}
          p="0"
          mt={{sm: "1rem", md: "0"}}
          borderRadius="5px"
          bg="darkAqua"
          display="flex"
          fontSize='14px'
          fontWeight="medium"
letterSpacing="0.875px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textStyle="subp"

        // >X ({(playerTwoCPU && playerOne.symbol === 'X') ? 'YOU' : playerOne.symbol === 'O' ? 'P2' : 'P1'}) <Box textStyle="h3" fontWeight="normal">{scores.p1}</Box></GridItem>
        >X ({determinePlayerLabels('X')}) <Box textStyle="h3" fontWeight="bold" fontSize={{ sm: '20px', md: '24px'}} letterSpacing={{sm: '1.25px', md: '1.5px'}} >{scores.p1}</Box></GridItem>
        <GridItem
          w={{sm: "96px", md: "140px"}}
          h={{sm: "64px", md: "72px"}}
          p="0"
          mt={{sm: "1rem", md: "0"}}
          borderRadius="5px"
          bg="blueGray"
          display="flex"
          fontSize='14px'
          fontWeight="medium"
          letterSpacing="0.875px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textStyle="subp"
        >TIES <Box textStyle="h3" fontWeight="bold" fontSize={{ sm: '20px', md: '24px'}} letterSpacing={{sm: '1.25px', md: '1.5px'}} >{scores.ties}</Box></GridItem>
        <GridItem
          w={{sm: "96px", md: "140px"}}
          h={{sm: "64px", md: "72px"}}
          p="0"
          mt={{sm: "1rem", md: "0"}} 
          borderRadius="5px"
          bg="orange"
          display="flex"
          fontSize='14px'
          fontWeight="medium"
          letterSpacing="0.875px"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textStyle="subp"
        >O ({determinePlayerLabels('O')}) <Box textStyle="h3" fontWeight="bold" fontSize={{ sm: '20px', md: '24px'}} letterSpacing={{sm: '1.25px', md: '1.5px'}} >{scores.p2}</Box></GridItem>
    </>
  )
}

export default Footer
