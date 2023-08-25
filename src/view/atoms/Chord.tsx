import { Text } from '@chakra-ui/react'
import React from 'react'

import { Chord as ChordModel } from '../../model'


interface ChordProps {
  chord: ChordModel
}
export default function Chord({ chord }: ChordProps) {
  return (
    <Text>
      {chord.fullName}
    </Text>
  )
}
