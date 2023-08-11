import { Note } from './note.model';

export class Marker {
  public id: string | number;
  public note: Note;
  public fret: number;
  public string: number;
  constructor(model: Marker) {
    Object.assign(this, model);
  }
}
