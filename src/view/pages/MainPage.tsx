import {
  Center, Container, Flex, Text
} from '@chakra-ui/react';

import { BoardWidget } from '../widgets/BoardWidget';

export default function MainPage() {
  return (
    <Flex
      direction={'column'}
    >
      <Center>
        <Text
          as={'h1'}
        >Dicionário de Acordes</Text>
      </Center>
      {/* <Flex */}

      <Flex
        height={'150px'}
        overflowX={'auto'}
      >

        <BoardWidget />
      </Flex>

    </Flex>
  );
}
