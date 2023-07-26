import { Text, Flex, Center, Square } from "@chakra-ui/react";

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
      // width={"50px"}
      flex={1}
      onClick={onClick}
      justifyContent={"center"}
      // bgColor="rgba(0,255,0,0.1)"
      // border={"1px"}
      // sx={{
      //   borderColor: "green",
      // }}
      _hover={{
        ".text": !isVisible && {
          visibility: "visible",
          bgColor: "purple.100",
          color: "gray.400",
        },
      }}
    >
      <Center>
        <Square
          className="text"
          size={"4"}
          bgColor={"transparent"}
          color={"transparent"}
          borderRadius={"2xl"}
          // visibility={"hidden"}
          p={"2px"}
          sx={
            isVisible && {
              bgColor: "purple.500",
              color: "white",
            }
          }
          // _hover={{
          //   visibility: "visible",
          //   bgColor: "purple.100",
          //   color: "gray.400",
          // }}
        >
          <Text fontSize={"xx-small"} fontWeight={"bold"}>
            {note}
          </Text>
        </Square>
      </Center>
    </Flex>
  );
}
