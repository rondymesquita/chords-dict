export type MarkerPosition = {
  fret: number;
  string: number;
};

export type OnMarkerClick = ({ fret, string }: MarkerPosition) => void;
