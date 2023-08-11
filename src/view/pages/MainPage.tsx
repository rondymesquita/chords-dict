import { Center, Text } from '@chakra-ui/react';

import { BoardWidget } from '../widgets/BoardWidget';

export default function MainPage() {
  return (
    <>
      <Center>
        <Text as={'h1'}>Dicionário de Acordes</Text>
      </Center>
      <BoardWidget />
    </>
  );
}
