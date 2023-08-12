import {
  BaseModel
} from '.';
import {
  Note
} from './note.model';

export class Marker extends BaseModel{
  public note: Note;
  public fret: number;
  public string: number;
  constructor(model: Partial<Marker>) {
    super()
    Object.assign(this, model);
    this.id = `${this.fret}-${this.string}`
  }
}
