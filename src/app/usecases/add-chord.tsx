import { useList } from '../../hooks/useList';
import { Chord } from '../../model';

export const addChordUseCase = () => {
  const {
    list: chords, push: addChord, clean: cleanChords, setList: setChords
  } = useList<Chord>([])
  return {
    chords, addChord, cleanChords, setChords
  }
}
