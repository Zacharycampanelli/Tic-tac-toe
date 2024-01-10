import { Box,  CardBody,  Flex } from '@chakra-ui/react';
import X from '../assets/images/icon-x.svg'
import O from '../assets/images/icon-O.svg'
import useGameContext from '../assets/theme/context';

const TogglePlayer = () => {
    const {playerOne, setPlayers} = useGameContext()
  return (
    <CardBody display="flex" justifyContent="center" padding="0">
    <Flex h="4rem" justifyContent="space-between" backgroundColor="navy" w="85%" cursor="pointer">
      <Box onClick={() => setPlayers('X')} className={playerOne.symbol === "X" ? "xpick" : "opick"}><img  src={X}  /></Box>
      <Box onClick={() => setPlayers('O')} className={playerOne.symbol === "X" ? "opick" : "xpick"}><img  src={O} /></Box>
    </Flex>
  </CardBody>
  )
}

export default TogglePlayer
