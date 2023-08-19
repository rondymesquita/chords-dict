import React from 'react'

import { Chord } from '../../model'

interface ChordsWidgetProps {
  chords: Chord[]
}

export default function ChordsWidget({ chords }: ChordsWidgetProps) {
  return (
    <div>
      {chords.map((chord: Chord) => {
        return (<p
          key={chord.id}
        >{chord.rootNote}{chord.name}</p>)
      })}</div>
  )
}
