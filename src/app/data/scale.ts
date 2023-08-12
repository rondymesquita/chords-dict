import { Note } from '../../model';
import { Scale } from '../rules/scale';
import { chromaticScale } from './chromatic-scale';

export const ScaleData = [...chromaticScale.map((note: Note) => new Scale(note))]
