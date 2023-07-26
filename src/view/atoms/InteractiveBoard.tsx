import { Box, Center, Flex, Square, Text } from "@chakra-ui/react";
import { OnMarkerClick } from "./types";
import { MarkerModel } from "../../model/markers.model";
import { Marker } from ".";
import { Transposer } from "../../util/transposer";

const transposer = new Transposer();

export function InteractiveBoard({
  onMarkerClick,
  tunning,
  activeMarkers = [],
}: {
  onMarkerClick: OnMarkerClick;
  tunning: Array<string>;
  activeMarkers?: Array<MarkerModel>;
}) {
  const isMarkerVisible = (fret: number, string: number) => {
    return !!activeMarkers.find((marker: MarkerModel) => {
      return marker.fret === fret && marker.string === string;
    });
  };

  return (
    <Box
      height={"100%"}
      width={"980px"}
      position={"absolute"}
      top={0}
      flexDirection={"column"}
    >
      <Box position={"relative"} height={"100%"}>
        <Flex flexDirection={"row"} height={"100%"}>
          {new Array(22).fill(0).map((_, fret) => {
            return (
              <Flex
                key={fret}
                flexDirection={"column"}
                height={"100%"}
                // border={"1px"}
                // borderColor={"red"}
                width={"50px"}
              >
                {tunning.map((note, string) => {
                  return (
                    <Marker
                      key={`${fret}-${string}`}
                      note={transposer.transposeUp(note, fret + 1)}
                      isVisible={isMarkerVisible(fret + 1, string + 1)}
                      onClick={() =>
                        onMarkerClick({ fret: fret + 1, string: string + 1 })
                      }
                    />
                  );
                })}
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
}
