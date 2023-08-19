import { Box, Button, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';

import { ChordsData } from '../../app/data/chords';
import { chromaticScale } from '../../app/data/chromatic-scale';
import { ChordMatcher } from '../../app/rules/chord-matcher';
import { useAddChordUseCase } from '../../app/usecases/add-chord';
import { useAddMarkerUseCase } from '../../app/usecases/add-marker';
import { useSearchChords } from '../../app/usecases/use-search-chords';
import { useIndexedList, useList } from '../../hooks/useList';
import * as model from '../../model'
import { Marker } from '../../model/markers.model';
import { Match } from '../../model/match.model';
import { Note } from '../../model/note.model';
import { Fretboard, InteractiveFretboard } from '../atoms';
import { Nut } from '../atoms/Nut';
import { MarkerPosition } from '../atoms/types';
import Debug from '../debug/Debug';

interface FretboardWidgetProps {
  onAddMarker?: (marker: model.Marker) => void
  markers: model.Marker[]
  tunning: Note[]
}

export function FretboardWidget({ onAddMarker, markers, tunning }: FretboardWidgetProps) {

  const addMarkerNote = ({ fret, string, note }: MarkerPosition) => {
    const marker = new Marker({
      fret,
      string,
      note,
    });
    onAddMarker && onAddMarker(marker)
  };

  return (
    <Flex
      direction={'column'}
      // transform={'rotate(90deg) '}
    >

      {/* <Button
        onClick={() => searchChord()}>Buscar acorde</Button> */}
      <Flex>
        <Nut
          height={'120px'}
          tunning={tunning}
          onNoteClick={addMarkerNote}
          activeMarkers={markers}
        />
        <Box
          height={'120px'}
          width={'fit-content'}
          position={'relative'}
          borderLeft={'4px'}
        >
          <Fretboard
            frets={10}
          />
          <InteractiveFretboard
            frets={10}
            tunning={tunning}
            activeMarkers={markers}
            onMarkerClick={addMarkerNote}
          />

        </Box>
        {/* <Flex
          m={4}
          border={'1px solid'}
          flexGrow={1}
          alignItems={'flex-start'}
          height={300}
          overflowY={'auto'}
          flexDirection={'row'}>
          <Debug
            {...{ markers }}/>
        </Flex> */}
      </Flex>

    </Flex>
  );
}
