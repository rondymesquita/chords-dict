import { Box, Button, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';

import { ChordsData } from '../../app/data/chords';
import { chromaticScale } from '../../app/data/chromatic-scale';
import { ChordMatcher } from '../../app/rules/chord-matcher';
import { useAddMarkerUseCase } from '../../app/usecases/add-marker';
import { useAddMatchUseCase } from '../../app/usecases/add-match';
import { useSearchChords } from '../../app/usecases/search-chords';
import { useIndexedList, useList } from '../../hooks/useList';
import * as model from '../../model'
import { Marker } from '../../model/markers.model';
import { Match } from '../../model/match.model';
import { Note } from '../../model/note.model';
import { Board, InteractiveBoard } from '../atoms';
import { Nut } from '../atoms/Nut';
import { MarkerPosition } from '../atoms/types';
import Debug from '../debug/Debug';

export function BoardWidget() {
  const { markers, addMarker } = useAddMarkerUseCase({ allowMultipleSameString: false })
  const { matches, cleanMatches, setMatches } = useAddMatchUseCase()
  const { searchChords } = useSearchChords()

  const addMarkerNote = ({ fret, string, note }: MarkerPosition) => {
    const marker = new Marker({
      fret,
      string,
      note,
      id: `${fret}-${string}`,
    });
    addMarker(marker)
    searchChord()
  };

  const searchChord = () => {
    cleanMatches()
    const m = searchChords(markers)
    setMatches(m)
  };

  useEffect(() => searchChord(), [markers])

  const tunning: Note[] = 'EBGDAE'.split('').map((n) => n as Note);

  return (
    <Flex direction={'column'}>
      <Button onClick={() => searchChord()}>Buscar acorde</Button>
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
          <Board frets={10}/>
          <InteractiveBoard
            frets={10}
            tunning={tunning}
            activeMarkers={markers}
            onMarkerClick={addMarkerNote}
          />
          <Flex direction={'column'}>
            <h2>Acordes</h2>
            <section>

              {matches.filter((match: Match) => match.isMatch).map((match: Match) => {
                return (<p key={match.id}>{match.chord.rootNote} {match.chord.name} - {new String(match.isMatch)}</p>)
              })}
            </section>
          </Flex>
        </Box>
        <Flex m={4} border={'1px solid'} flexGrow={1} alignItems={'flex-start'} height={300} overflowY={'auto'} flexDirection={'row'}>
          <Debug {...{ markers }}/>
        </Flex>
      </Flex>

    </Flex>
  );
}