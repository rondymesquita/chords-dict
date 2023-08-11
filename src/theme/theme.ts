import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { fontFamily, globalStyles } from './global.styles';

const defaultTheme = extendTheme();
// console.log(defaultTheme);

export const theme = extendTheme({
  styles: {
    global: globalStyles,
  },
  colors: {
    primary: colors.purple,
    secondary: colors.amber,
    terciary: colors.nanquin,
    destructive: colors.plum,
    bg: { 0: 'white', ...colors.slate, 1000: 'black' },
    fg: { 0: 'white', ...colors.slate, 1000: 'black' },
    ...colors,
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily,
      },
    },
    Button: {
      defaultProps: {
        size: 'sm',
      },
      sizes: {
        sm: { h: '8', minW: '8', fontSize: 'xs', px: '8' },
      },
      variants: {
        primary: (props: any) => ({
          ...defaultTheme.components.Button.variants.solid(props),
          bgGradient: 'linear(to-r, primary.500, primary.400)',
        }),
        action: (props: any) => ({
          ...defaultTheme.components.Button.variants.solid(props),
          boxShadow:
            '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          '&:hover': {
            boxShadow:
              '0 10px 15px -3px rgb(0 0 0 / 10%), 0 15px 15px -2px rgb(0 0 0 / 10%)',
            transform: 'scale(1.03)',
          },
        }),
      },
      baseStyle: {
        borderRadius: 'md',
      },
    },
  },
});
