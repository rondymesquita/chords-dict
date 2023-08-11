import { Center, Text } from '@chakra-ui/react';

import { FretboardWidget } from '../widgets/FretboardWidget';

export default function MainPage() {
  return (
    <>
      <Center>
        <Text as={'h1'}>Dicionário de Acordes</Text>
      </Center>
      <FretboardWidget />
    </>
  );
}
