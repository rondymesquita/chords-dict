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
          bgColor: "primary.200",
          color: "fg.500",
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
              bgColor: "primary.500",
              color: "fg.0",
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
