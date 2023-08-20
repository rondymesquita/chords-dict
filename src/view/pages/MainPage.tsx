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
        p={2}
        pb={3}
        overflowX={'auto'}
        shadow={'inner'}
        bg={'bg.50'}
      >
        <FretboardWidget
          tunning={tunning}
          onAddMarker={addMarker}
          markers={markers}
        />
      </Flex>
      <Flex
        direction={'column'}
        p={2}
      >
        <Center>
          <Text
            as={'h1'}
          >Acordes</Text>
        </Center>
        {chords.length === 0 ? (<Flex>
          <Text
            as={'i'}
            color={'fg.500'}
          >Nenhum acorde encontrado.</Text>

        </Flex>) : (<Flex>
          <ChordsWidget
            chords={chords}
          />

        </Flex>)}

      </Flex>

    </Flex>
  );
}
