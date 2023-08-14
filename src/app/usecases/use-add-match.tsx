import { useIndexedList, useList } from '../../hooks/useList';
import { Chord, Marker } from '../../model';
import { Match } from '../../model/match.model';

export const useAddMatchUseCase = () => {
  const {
    list: matches, push: addMatch, clean: cleanMatches, setList: setMatches
  } = useList<Chord>([])
  return {
    matches, addMatch, cleanMatches, setMatches
  }
}
