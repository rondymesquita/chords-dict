import { Note } from '../../model/note.model';

export type MarkerPosition = {
  fret: number;
  string: number;
  note: Note;
};

export type OnMarkerClick = ({ fret, string, note }: MarkerPosition) => void;
