import React from 'react'

import { Chord as ChordModel } from '../../model'


interface ChordProps {
  chord: ChordModel
}
export default function Chord({ chord }: ChordProps) {
  return (
    <div><p>
      {/* <Flex></Flex> */}
      {chord.rootNote}{chord.name}

    </p></div>
  )
}
