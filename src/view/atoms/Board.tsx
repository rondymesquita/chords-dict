import { Box, Flex, Square } from '@chakra-ui/react';

export interface BoardProps {
  frets: number
}

export default function Dot() {
  return (
    <Square
      bgColor={'primary.50'}
      size={'12px'}
      margin={'auto'}
      borderRadius={'2xl'}
      border={'1px solid var(--chakra-colors-primary-300)'}
      dropShadow={'2xl'}
      sx={{
        boxShadow: 'inset 0px 1px 2px -1px var(--chakra-colors-primary-700)'
      }}></Square>
  )
}


export function Board({ frets=22 }: BoardProps) {
  const dotsPosition: number[] = [3,5,7,9,12,15].map(n => n-1)
  return (
    <Box
      height={'100%'}
      width={'fit-content'}
      border={'0px'}
      bgColor={'secondary.200'}
    >
      <Flex
        height={'100%'}
        flexDirection={'row'}
        position={'relative'}
        py={'1px'}
      >
        {/* frets */}
        <Flex
          width='100%'
          py={'2px'}>
          {new Array(frets).fill(0).map((_, index) => {
            return (
              <Flex
                key={index}
                // bgColor={'yellow.100'}
                height={'100%'}
                width={'50px'}
                borderRight={'2px'}
                borderColor={'secondary.900'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignContent={'center'}

              >
                {dotsPosition.includes(index) && <Dot/>}
              </Flex>
            );
          })}
        </Flex>

        {/* strings */}
        <Flex
          height={'100%'}
          width={'100%'}
          position={'absolute'}
          top={0}
          flexDirection={'column'}
        >
          {new Array(7).fill(0).map((_, index) => {
            return (
              <Box
                key={index}
                flex={2}
                width={'100%'}
                borderBottom={'2px'}
                sx={{ borderColor: 'zinc.400' }}
                _last={{
                  borderBottom: 'none',
                  flex: 1.2,
                }}
                _first={{
                  flex: 1.2,
                }}
              ></Box>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
}
