import { Box, Flex, Text } from "@chakra-ui/react";
import { OnMarkerClick } from "./types";

export function Nut({
  height,
  tunning = [],
  onNoteClick,
}: {
  height: string | number;
  tunning: string[];
  onNoteClick: OnMarkerClick;
}) {
  return (
    <Flex flexDirection={"column"} height={height} p={1}>
      {tunning.map((note: string, index: number) => {
        return (
          <Box
            key={index}
            flex={1}
            onClick={() => onNoteClick({ fret: 0, string: index + 1 })}
          >
            <Text fontSize={"xs"}>{note}</Text>
          </Box>
        );
      })}
    </Flex>
  );
}
