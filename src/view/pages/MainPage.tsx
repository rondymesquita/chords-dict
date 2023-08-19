import {
  Center, Container, Flex, Text
} from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useCallback } from 'react'

import { useAddChordUseCase } from '../../app/usecases/add-chord';
import { useAddMarkerUseCase } from '../../app/usecases/add-marker';
import { useSearchChords } from '../../app/usecases/use-search-chords';
import { Chord, Marker, Note } from '../../model';
import { FretboardWidget } from '../widgets/FretboardWidget';



export default function MainPage() {

  const { markers, addMarker } = useAddMarkerUseCase({ allowMultipleSameString: false })
  const { chords, cleanChords, setChords } = useAddChordUseCase()
  const { searchChords } = useSearchChords()

  const tunning: Note[] = 'EBGDAE'.split('').map((n) => n as Note);


  const searchChord = () => {
    cleanChords()
    const chordsResult = searchChords(markers)
    setChords(chordsResult)
  };

  useEffect(() => {
    searchChord()
  }, [markers])


  return (
    <Flex
      direction={'column'}
    >
      <Center>
        <Text
          as={'h1'}
        >Dicionário de Acordes</Text>
      </Center>

      <Flex
        height={'150px'}
        overflowX={'auto'}
      >

        <FretboardWidget
          tunning={tunning}
          onAddMarker={addMarker}
          markers={markers}
        />
      </Flex>
      <Flex
        direction={'column'}
      >
        <h2>Acordes</h2>
        <section>

          {chords.map((chord: Chord) => {
            return (<p
              key={chord.id}
            >{chord.rootNote}{chord.name}</p>)
          })}
        </section>
      </Flex>

    </Flex>
  );
}
