import { useState } from 'react';
import { Box, GridItem } from '@chakra-ui/react';

const FooterItem = ({ symbol, playerLabel, scores, bg }) => {
  let score = 0;

  if (playerLabel === 'YOU' || playerLabel === 'P1') score = scores.p1;
  else if (playerLabel === 'CPU' || playerLabel === 'P2') score = scores.p2;
  else score = scores.ties;

  return (
    <GridItem
      w={{ sm: '96px', md: '140px' }}
      h={{ sm: '64px', md: '72px' }}
      p="0"
      mt={{ sm: '1rem', md: '0' }}
      borderRadius="5px"
      bg={bg}
      display="flex"
      fontSize="14px"
      fontWeight="medium"
      letterSpacing="0.875px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textStyle="subp"
    >
      {symbol} {playerLabel !== 'TIE' ? `(${playerLabel})` : null}
      <Box
        textStyle="h3"
        fontWeight="bold"
        fontSize={{ sm: '20px', md: '24px' }}
        letterSpacing={{ sm: '1.25px', md: '1.5px' }}
      >
        {score}
      </Box>
    </GridItem>
  );
};

export default FooterItem;
