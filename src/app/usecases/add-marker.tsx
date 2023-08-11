import { useIndexedList } from '../../hooks/useList';
import { Marker } from '../../model';

interface UseAddMarkerInput {allowMultipleSameString: boolean}

export const useAddMarkerUseCase = ({ allowMultipleSameString }: UseAddMarkerInput = { allowMultipleSameString: false }) => {
  const [markers, add, removeMarker, exists] = useIndexedList<Marker>();

  const addMarker = (marker: Marker) => {
    const markerOnSameString = markers.find(
      (m: Marker) => m.string === marker.string
    );

    if (markerOnSameString && !allowMultipleSameString) {
      removeMarker(markerOnSameString);
    }
    if (exists(marker)) {
      removeMarker(marker);
    } else {
      add(marker);
    }
  }

  return { markers, addMarker }
}
