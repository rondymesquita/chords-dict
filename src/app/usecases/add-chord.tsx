import { useIndexedList, useList } from '../../hooks/useList';
import { Chord, Marker } from '../../model';
import { Match } from '../../model/match.model';

export const useAddChordUseCase = () => {
  const {
    list: chords, push: addChord, clean: cleanChords, setList: setChords
  } = useList<Chord>([])
  return {
    chords, addChord, cleanChords, setChords
  }
}
