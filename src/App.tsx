import {
  Center,
  ChakraProvider,
  Container,
  Flex,
  Text,
} from '@chakra-ui/react';

import { theme } from './theme/theme';
import MainPage from './view/pages/MainPage';

function App() {
  return (
    <>
      <ChakraProvider
        theme={theme}
        resetCSS={true}
      >
        <Container
          // debug
          // border={'1px solid red'}
          // centerContent
          p={2}
        >
          <MainPage />
        </Container>
      </ChakraProvider>
    </>
  );
}

export default App;
