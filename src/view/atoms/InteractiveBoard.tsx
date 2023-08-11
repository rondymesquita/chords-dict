import { Box, Center, Flex, Square, Text } from '@chakra-ui/react';

import { Transposer } from '../../app/rules/transposer';
import * as model from '../../model';
import { Marker } from '.';
import { OnMarkerClick } from './types';

const transposer = new Transposer();

interface InteractiveBoardProps {
  onMarkerClick: OnMarkerClick;
  tunning: Array<model.Note>;
  activeMarkers?: Array<model.Marker>;
  frets: number
}

export function InteractiveBoard({
  onMarkerClick,
  tunning,
  activeMarkers = [],
  frets = 22
}: InteractiveBoardProps) {
  const isMarkerVisible = (fret: number, string: number) => {
    return !!activeMarkers.find((marker: model.Marker) => {
      return marker.fret === fret && marker.string === string;
    });
  };

  return (
    <Box
      height={'100%'}
      width={'980px'}
      position={'absolute'}
      top={0}
      flexDirection={'column'}
    >
      <Box
        position={'relative'}
        height={'100%'}>
        <Flex
          flexDirection={'row'}
          height={'100%'}>
          {new Array(frets).fill(0).map((_, fret) => {
            return (
              <Flex
                key={fret}
                flexDirection={'column'}
                height={'100%'}
                // border={"1px"}
                // borderColor={"red"}
                width={'50px'}
              >
                {tunning.map((note, string) => {
                  return (
                    <Marker
                      key={`${fret}-${string}`}
                      note={transposer.transposeUp(note, fret + 1)}
                      isVisible={isMarkerVisible(fret + 1, string + 1)}
                      onClick={() =>
                        onMarkerClick({
                          fret: fret + 1,
                          string: string + 1,
                          note: transposer.transposeUp(note, fret + 1),
                        })
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
