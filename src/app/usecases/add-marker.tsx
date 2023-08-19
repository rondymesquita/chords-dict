import { useIndexedList } from '../../hooks/useList';
import { Marker } from '../../model';


interface UseAddMarkerInput {allowMultipleSameString: boolean}

export const useAddMarkerUseCase = ({ allowMultipleSameString }: UseAddMarkerInput = { allowMultipleSameString: false }) => {
  const [
    markers, add, removeMarker, exists
  ] = useIndexedList<Marker>();

  const addMarker = (marker: Marker) => {
    const existingMarkerOnSameString = markers.find(
      (m: Marker) => m.string === marker.string
    );

    if (existingMarkerOnSameString && !allowMultipleSameString) {
      removeMarker(existingMarkerOnSameString);
    }
    if (exists(marker)) {
      removeMarker(marker);
    } else {
      add(marker);
    }
  }

  return { markers, addMarker }
}
