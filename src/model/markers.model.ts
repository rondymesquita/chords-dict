export class MarkerModel {
  public id: string | number;
  public fret: number;
  public string: number;
  constructor(model: MarkerModel) {
    Object.assign(this, model);
  }
}
