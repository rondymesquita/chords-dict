
// export type AbstractClass = abstract new (...args: any) => any

// export type Constructable<T extends AbstractClass> = {
//   new(params: ConstructorParameters<T>): T
// }

export interface Constructable<T> {
  new (...args: any[]): any;
  // new (...args: any[]): any;
}
