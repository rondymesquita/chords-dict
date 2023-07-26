import { Box, Center, Flex, Square, Text } from "@chakra-ui/react";
import { OnMarkerClick } from "./types";
import { MarkerModel } from "../../model/markers.model";
import { Marker } from ".";

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

  class CircularLinkedList<T> {
    public list: Array<T> = [];
    public index: number = 0;
    constructor(list: Array<T> = []) {
      this.list = list;
    }
    add(item: T) {
      this.list.push(item);
    }
    next(): T {
      const item = this.list[this.index++];
      if (!item) {
        this.index = 0;
        return this.list[this.index++];
      }
      return item;
    }
    indexOf(item: T) {
      return this.list.indexOf(item);
    }
    get(index: number) {
      return this.list[index];
    }
  }

  const chromaticScale = new CircularLinkedList<string>([
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ]);

  const transposeUp = (note: string, fret: number) => {
    const noteIndex = chromaticScale.indexOf(note);
    const index = Math.ceil(
      (noteIndex + fret + 1) % chromaticScale.list.length
    );
    return chromaticScale.get(index);
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
                      note={transposeUp(note, fret)}
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
