import { BaseModel, Chord } from '.'

export class Match extends BaseModel{
  chord: Chord
  isMatch: boolean

  constructor(params: Match) {
    super()
    Object.assign(this, params)

    this.id = crypto.randomUUID()
    // console.log(this);
  }
}
