import { Box, Flex, Text } from "@chakra-ui/react";
import { OnMarkerClick } from "./types";
import { Marker } from "../../model/markers.model";

export function Nut({
  height,
  tunning = [],
  activeMarkers = [],
  onNoteClick,
}: {
  height: string | number;
  tunning: string[];
  activeMarkers?: Array<Marker>;
  onNoteClick: OnMarkerClick;
}) {
  const isMarkerActive = (fret: number, string: number) => {
    return !!activeMarkers.find((marker: Marker) => {
      return marker.fret === fret && marker.string === string;
    });
  };

  const isStringAlreadyActiveWithMarker = (string: number) => {
    const markerOnSameString = activeMarkers.find(
      (marker: Marker) => marker.string === string
    );
    return !!markerOnSameString;
  };

  const NUT_FRET = 0;
  return (
    <Flex flexDirection={"column"} height={height} p={1}>
      {tunning.map((note: string, string: number) => {
        return (
          <Box
            position={"relative"}
            key={string}
            flex={1}
            onClick={() => onNoteClick({ fret: NUT_FRET, string: string + 1 })}
            sx={
              isMarkerActive(NUT_FRET, string + 1) ||
              isStringAlreadyActiveWithMarker(string + 1)
                ? { color: "fg.800" }
                : { color: "fg.400" }
            }
          >
            <Text
              position={"absolute"}
              top={0}
              fontSize={"xs"}
              color={"destructive.600"}
              sx={
                isMarkerActive(NUT_FRET, string + 1) ||
                isStringAlreadyActiveWithMarker(string + 1)
                  ? { color: "transparent" }
                  : { color: "destructive.500" }
              }
            >
              X
            </Text>
            <Text fontSize={"xs"}>{note}</Text>
          </Box>
        );
      })}
    </Flex>
  );
}
