import { Box, Flex } from '@chakra-ui/react';

export interface BoardProps {
  frets: number
}

export function Board({ frets=22 }: BoardProps) {
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
        <Flex width='100%' py={'2px'}>
          {new Array(frets).fill(0).map((_, index) => {
            return (
              <Flex
                key={index}
                // bgColor={"yellow.100"}
                height={'100%'}
                width={'50px'}
                borderRight={'2px'}
                borderColor={'secondary.900'}
                flexDirection={'column'}
              ></Flex>
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
