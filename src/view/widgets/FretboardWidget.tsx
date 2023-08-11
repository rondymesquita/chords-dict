import { Box, Button, Flex } from '@chakra-ui/react';
import { createLogger } from 'vite';

import { ChordsData } from '../../app/data/chords';
import { chromaticScale } from '../../app/data/chromatic-scale';
import { Intervals } from '../../app/deprecated-intervals';
import { ChordMatcher } from '../../app/rules/chord-matcher';
import { useIndexedList, useList } from '../../hooks/useList';
import * as model from '../../model'
import { Chord } from '../../model/chord.model';
import { Marker } from '../../model/markers.model';
import { Match } from '../../model/match.model';
import { Note } from '../../model/note.model';
import { Board, InteractiveBoard } from '../atoms';
import { Nut } from '../atoms/Nut';
import { MarkerPosition } from '../atoms/types';
import { Constructable } from './../../util';

export function FretboardWidget() {
  const [markers, addMarker, removeMarker, exists] = useIndexedList<Marker>();
  const [matches, pushMatch, _, cleanMatch] = useList<Match>([])

  const addMarkerNote = ({ fret, string, note }: MarkerPosition) => {
    const marker = new Marker({
      fret,
      string,
      note,
      id: `${fret}-${string}`,
    });

    const markerOnSameString = markers.find(
      (marker: Marker) => marker.string === string
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

  const show = () => {
    cleanMatch()
    chromaticScale.forEach((note: Note) => {

      // if (note != 'D') return

      const chordMatcher = new ChordMatcher()
      ChordsData.forEach((clazz: model.ConstructableChord) => {
        const chord = new clazz(note)
        // console.log({ markers });

        const match = chordMatcher.match(markers, chord)
        pushMatch(match)
      })
    })
  };

  const tunning = 'EBGDAE'.split('');
  // const tunning = "DADGAD".split("");

  return (
    <Flex direction={'column'}>
      <Button onClick={() => show()}>Do</Button>
      <Flex>
        <Nut
          height={'120px'}
          tunning={tunning}
          onNoteClick={addMarkerNote}
          activeMarkers={markers}
        />
        <Box
          height={'120px'}
          width={'100%'}
          position={'relative'}
          borderLeft={'4px'}
        >
          <Board />
          <InteractiveBoard
            tunning={tunning}
            activeMarkers={markers}
            onMarkerClick={addMarkerNote}
          />
        </Box>
      </Flex>
      <Flex direction={'column'}>
        <h2>Acordes</h2>
        <section>

          {matches.filter((match: Match) => match.isMatch).map((match: Match) => {
            return (<p key={match.id}>{match.chord.rootNote} {match.chord.name} - {new String(match.isMatch)}</p>)
          })}
        </section>
      </Flex>
    </Flex>
  );
}
