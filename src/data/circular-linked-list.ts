export class CircularLinkedList<T> {
  public list: Array<T> = [];
  public index: number = 0;
  constructor(list: Array<T> = []) {
    this.list = list;
  }
  add(item: T) {
    this.list.push(item);
  }
  next(): T {
    const item = this.list[this.index++];
    if (!item) {
      this.index = 0;
      return this.list[this.index++];
    }
    return item;
  }
  indexOf(item: T) {
    return this.list.indexOf(item);
  }
  get(index: number) {
    return this.list[index];
  }
}
