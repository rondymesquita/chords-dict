import { Box, Center, Flex, Square, Text } from "@chakra-ui/react";
import { Nut } from "../atoms/Nut";
import { MarkerPosition } from "../atoms/types";

import * as Atoms from "../atoms";
import { useIndexedList } from "../../hooks/useList";
import { MarkerModel } from "../../model/markers.model";
console.log({ Atoms });

export function Fretboard() {
  const [markers, addMarker, removeMarker, exists] = useIndexedList<
    MarkerModel
  >();

  const addMarkerNote = ({ fret, string }: MarkerPosition) => {
    const marker = new MarkerModel({ fret, string, id: `${fret}-${string}` });

    const markerOnSameString = markers.find(
      (marker: MarkerModel) => marker.string === string
    );

    if (markerOnSameString) {
      removeMarker(markerOnSameString);
    }
    if (exists(marker)) {
      removeMarker(marker);
    } else {
      addMarker(marker);
    }
  };

  const tunning = "EBGDAE".split("");
  // const tunning = "DADGAD".split("");

  return (
    <Flex>
      <Nut
        height={"120px"}
        tunning={tunning}
        onNoteClick={addMarkerNote}
        activeMarkers={markers}
      />
      <Box
        height={"120px"}
        width={"100%"}
        position={"relative"}
        borderLeft={"4px"}
      >
        <Atoms.Board />
        <Atoms.InteractiveBoard
          tunning={tunning}
          activeMarkers={markers}
          onMarkerClick={addMarkerNote}
        />
      </Box>
    </Flex>
  );
}
