
import { Flex } from '@chakra-ui/react'

import * as model from '../../model'
import Chord from '../atoms/Chord'

interface ChordsWidgetProps {
  chords: model.Chord[]
}

export default function ChordsWidget({ chords }: ChordsWidgetProps) {

  // const chords = [new MajorChord('D')]
  return (
    <>{chords.map((chord: model.Chord) => {
      return (
        <Flex
          key={chord.id}
        ><Chord
            chord={chord}
        /></Flex>)
    })}</>
  )
}
