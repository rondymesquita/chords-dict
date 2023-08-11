import { Center, Flex, Square,Text } from '@chakra-ui/react';

export function Marker({
  onClick,
  note,
  isVisible = false,
}: {
  onClick: () => void;
  note: string;
  isVisible: boolean;
}) {
  return (
    <Flex
      flex={1}
      onClick={onClick}
      justifyContent={'center'}
      _hover={{
        '.text': !isVisible && {
          visibility: 'visible',
          bgColor: 'primary.200',
          color: 'fg.500',
        },
      }}
    >
      <Center>
        <Square
          className='text'
          size={'4'}
          bgColor={'transparent'}
          color={'transparent'}
          borderRadius={'2xl'}
          p={'2px'}
          sx={
            isVisible && {
              bgColor: 'primary.500',
              color: 'fg.0',
            }
          }
        >
          <Text
            fontSize={'xx-small'}
            fontWeight={'bold'}>
            {note}
          </Text>
        </Square>
      </Center>
    </Flex>
  );
}
