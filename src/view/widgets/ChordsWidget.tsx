


import { Box, Text } from '@chakra-ui/react'

import * as model from '../../model'
import Chord from '../atoms/Chord'

interface ChordsWidgetProps {
  chords: model.Chord[]
}

export default function ChordsWidget({ chords }: ChordsWidgetProps) {

  // const chords = [new MajorChord('D')]
  return (
    <Box
      as={'ul'}
      listStyleType={'none'}
    > {chords.map((chord: model.Chord) => {
        return (
          <Text
            as={'li'}
            key={chord.id}
          ><Chord
              chord={chord}
          /></Text>)
      })}</Box>
  )
}
