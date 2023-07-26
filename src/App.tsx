import {
  Center,
  ChakraProvider,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import { theme } from "./theme/theme";
import { Fretboard } from "./view/widgets/Fretboard";

function App() {
  return (
    <>
      <ChakraProvider theme={theme} resetCSS={true}>
        <Container maxWidth={"container.lg"} p={2}>
          <Center>
            <Text as={"h1"}>Dicionário de Acordes</Text>
          </Center>
          <Fretboard />
        </Container>
      </ChakraProvider>
    </>
  );
}

export default App;
