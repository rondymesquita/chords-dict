import {
  Box, Flex, Square, Text
} from '@chakra-ui/react';

interface FretboardProps {
  frets: number
  showFretNumbers: boolean
}

export function Dot() {
  return (
    <Square
      bgColor={'primary.50'}
      size={'12px'}
      margin={'auto'}
      borderRadius={'2xl'}
      border={'1px solid var(--chakra-colors-primary-300)'}
      dropShadow={'2xl'}
      sx={{ boxShadow: 'inset 0px 1px 2px -1px var(--chakra-colors-primary-700)' }}
    ></Square>
  )
}
export function FretNumber({ number }: {number: number}) {
  return (
    <Square
      position={'absolute'}
      // bgColor={'primary.100'}
      bottom={'-20px'}
      left={'35%'}
      size={'12px'}
      margin={'auto'}
      borderRadius={'2xl'}
      // border={'1px solid var(--chakra-colors-primary-300)'}
      // dropShadow={'2xl'}
      // sx={{ boxShadow: 'inset 0px 1px 2px -1px var(--chakra-colors-primary-700)' }}
    ><Text
        fontSize={'small'}
        color={'fg.400'}
      >{number}</Text></Square>
  )
}


export function Fretboard({ frets=22, showFretNumbers= true }: FretboardProps) {
  const dotsPosition: number[] = [
    3,5,7,9,12,15,17,19,21
  ].map(n => n-1)
  return (
    <Box
      height={'100%'}
      width={'fit-content'}
      bgColor={'secondary.200'}
    >
      <Flex
        height={'100%'}
        flexDirection={'row'}
        position={'relative'}
        py={'1px'}
        // border={'1px solid red'}
      >
        {/* frets */}
        <Flex
          width='100%'
          py={'2px'}
        >
          {new Array(frets).fill(0).map((_, index) => {
            return (
              <Flex
                key={index}
                position={'relative'}
                width={'100%'}
                // border={'1px solid red'}
              >
                {dotsPosition.includes(index) && <FretNumber
                  number={index + 1}
                />}

                <Flex
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
                _first={{ flex: 1.2, }}
              ></Box>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
}
