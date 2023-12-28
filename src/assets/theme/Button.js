import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
  baseStyle: {
    fontFamily: 'Outfit',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'navy',
    margin: '1em 0 0',
    justifyContent: 'center',
    alignItems: 'center'

  },
  sizes: {
    sm: {
        borderRadius: '10px',
        fontSize: '16px',
        letterSpacing: '1px'
        
    },
    lg: {
      borderRadius: '15px',
      fontSize: '20px',
      letterSpacing: '1.25px'
    },
  },
  variants: {
    orange: {
        background: 'orange',
        boxShadow: '0px -8px 0px 0px #CC8B13 inset',
        _hover: { backgroundColor: 'lightOrange'}

    },
    blue: {
        background: 'darkAqua', 
        boxShadow: '0px -8px 0px 0px #118C87 inset',
        _hover: { backgroundColor: 'aqua'}

    },
    gray: {
        background: 'blueGray',
        boxShadow: '0px -4px 0px 0px #6B8997 inset',
        _hover: { backgroundColor: 'gray'}

    }
  },
  defaultProps: {
    size: 'md',
    variant: 'orange',
  },
})

export default Button;