import { useIndexedList } from '../../hooks/useList';
import { Marker } from '../../model';

export const useAddMarkerUseCase = () => {
  const [markers, add, removeMarker, exists] = useIndexedList<Marker>();

  const addMarker = (marker: Marker) => {
    const markerOnSameString = markers.find(
      (m: Marker) => m.string === marker.string
    );

    if (markerOnSameString) {
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
