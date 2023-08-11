import { CircularLinkedList } from '../data/circular-linked-list';
import { Note } from '../model/note.model';
import { chromaticScale } from './data/chromatic-scale';

export class Transposer {
  private chromaticScale: CircularLinkedList<Note>;
  constructor() {
    this.chromaticScale = new CircularLinkedList<Note>(chromaticScale)
  }
  transposeUp(note: Note, step: number): Note {
    this.chromaticScale.index = this.chromaticScale.indexOf(note)
    return this.chromaticScale.stepUp(step)
  }
  transposeDown(note: Note, step: number): Note {
    this.chromaticScale.index = this.chromaticScale.indexOf(note)
    return this.chromaticScale.stepDown(step)
  }
}
