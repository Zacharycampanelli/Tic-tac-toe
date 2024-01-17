import { Box, Button, GridItem, Image } from '@chakra-ui/react';

import logo from '../assets/images/logo.svg';
import X_gray from '../assets/images/icon-x-gray.svg';
import O_gray from '../assets/images/icon-o-gray.svg';
import Restart from '../assets/images/icon-restart.svg';

const Header = ({ onResetGameOpen, playerTurn }) => {
  
    const restartHandler = () => {
    onResetGameOpen();
  };

  return (
    <>
      <GridItem
        w={{ sm: '96px', md: '140px' }}
        h={{ sm: '40px', md: '52px' }}
        p="0"
        mb={{ sm: '2rem', md: '0' }}
        borderRadius="5px"
      >
        <Image src={logo} alt="X and O logo" />
      </GridItem>
      <GridItem
        w={{ sm: '96px', md: '140px' }}
        h={{ sm: '40px', md: '52px' }}
        mb={{ sm: '2rem', md: '0' }}
        padding="0"
        borderRadius="5px"
        bg="darkBlue"
        sx={{ boxShadow: '0px -8px 0px 0px #10212A inset' }}
        textStyle="p"
        textColor="blueGray"
        fontWeight="bold"
        fontSize={{ sm: '14px', md: '16px' }}
        letterSpacing={{ sm: '0.875px', md: '1px' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        pb="8px"
      >
        <img src={playerTurn === 'X' ? X_gray : O_gray} width="16px" height="16px" />

        <Box ml="10px">TURN</Box>
      </GridItem>
      <GridItem
        w={{ sm: '96px', md: '140px' }}
        h={{ sm: '40px', md: '52px' }}
        padding="0"
        mb={{ sm: '2rem', md: '0' }}
        borderRadius="5px"
        display="flex"
        justifyContent="end"
        alignItems="center"
      >
        <Button variant="gray" boxSize={{ sm: '40px', md: '52px' }} padding="0" margin="0" onClick={restartHandler}>
          <img src={Restart} alt="restart button" />
        </Button>
      </GridItem>
    </>
  );
};

export default Header;
