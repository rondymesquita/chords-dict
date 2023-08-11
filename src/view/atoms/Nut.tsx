import { Box, Center, Flex, Square, Text } from '@chakra-ui/react';

import { Note } from '../../model';
import { Marker } from '../../model/markers.model';
import { OnMarkerClick } from './types';

export function Nut({
  height,
  tunning = [],
  activeMarkers = [],
  onNoteClick,
}: {
  height: string | number;
  tunning: Note[];
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
    <Flex
      flexDirection={'column'}
      height={height}
      p={1}>
      {tunning.map((note: Note, string: number) => {
        return (
          <Box
            p={'2px'}
            position={'relative'}
            key={string}
            flex={1}
            onClick={() => onNoteClick({ fret: NUT_FRET, string: string + 1, note })}
            sx={
              isMarkerActive(NUT_FRET, string + 1) ||
              isStringAlreadyActiveWithMarker(string + 1)
                ? { color: 'fg.800' }
                : { color: 'fg.400' }
            }
          >
            <Center
              width={'100%'}
              height={'100%'}
            >
              <Square
                className='text'
                size={'4'}
                bgColor={'primary.200'}
                color={'fg.50'}
                borderRadius={'2xl'}
                p={'2px'}
                sx={
                  isMarkerActive(NUT_FRET, string + 1) && {
                    bgColor: 'primary.500',
                    color: 'fg.0',
                  }
                }>
                <Text
                  position={'absolute'}
                  fontSize={'md'}
                  fontWeight={'bold'}
                  color={'destructive.600'}
                  sx={
                    isMarkerActive(NUT_FRET, string + 1) ||
                    isStringAlreadyActiveWithMarker(string + 1)
                      ? { color: 'transparent' }
                      : { color: 'destructive.500' }
                  }
                >
              X
                </Text>
                <Text
                  fontSize={'xx-small'}
                  fontWeight={'bold'}>
                  {note}
                </Text>
              </Square>
            </Center>
          </Box>
        );
      })}
    </Flex>
  );
}
