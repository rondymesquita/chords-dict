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
  prev(): T {
    this.index--
    const item = this.list[this.index];
    if (!item) {
      this.index = this.list.length;
      this.index--
      return this.list[this.index];
    }
    return item;
  }
  indexOf(item: T) {
    return this.list.indexOf(item);
  }
  get(index: number) {
    return this.list[index];
  }

  getRandom() {
    const index = Math.floor(Math.random() * this.list.length)
    return this.list[index];
  }
  stepUp(step: number) {
    let item = this.get(this.index);
    let count = 0
    while(count <= step) {
      item = this.next()
      count++
    }
    return item
  }
  stepDown(step: number) {
    let item = this.get(this.index);
    let count = step
    while(count > 0) {
      item = this.prev()
      count--
    }
    return item
  }
}
