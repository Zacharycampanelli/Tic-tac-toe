import { Box, GridItem } from '@chakra-ui/react';
import useGameContext from '../assets/theme/context';
import FooterItem from './FooterItem';

const Footer = () => {
  const { playerOne, playerTwo, playerTwoCPU, scores } = useGameContext();

  const determinePlayerLabels = (symbol) => {
    if (playerTwoCPU && playerOne.symbol === symbol) {
      return 'YOU';
    }
    if (playerTwoCPU && playerTwo.symbol === symbol) {
      return 'CPU';
    }
    if (!playerTwoCPU && playerOne.symbol === symbol) {
      return 'P1';
    }
    if (!playerTwoCPU && playerTwo.symbol === symbol) {
      return 'P2';
    }
    if (symbol === 'TIE') {
      return 'TIE';
    }
  };

  return (
    <>
      <FooterItem symbol="X" playerLabel={determinePlayerLabels('X')} scores={scores} bg="darkAqua" />
      <FooterItem symbol="TIES" playerLabel={determinePlayerLabels('TIE')} scores={scores} bg="blueGray" />
      <FooterItem symbol="O" playerLabel={determinePlayerLabels('O')} scores={scores} bg="orange" />
    </>
  );
};

export default Footer;
