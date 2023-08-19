import { Center, Flex, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'

import { addChordUseCase } from '../../app/usecases/add-chord';
import { addMarkerUseCase } from '../../app/usecases/add-marker';
import { searchChordsUseCase } from '../../app/usecases/search-chords';
import { Note } from '../../model';
import ChordsWidget from '../widgets/ChordsWidget';
import { FretboardWidget } from '../widgets/FretboardWidget';



export default function MainPage() {

  const { markers, addMarker } = addMarkerUseCase({ allowMultipleSameString: false })
  const { chords, cleanChords, setChords } = addChordUseCase()
  const { searchChords } = searchChordsUseCase()

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
        <Flex>
          <ChordsWidget
            chords={chords}
          />



        </Flex>
      </Flex>

    </Flex>
  );
}
