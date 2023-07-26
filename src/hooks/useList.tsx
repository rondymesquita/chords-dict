import { useState } from "react";

export function useList<T = any>(
  initialValue: Array<T>
): [T[], (item: T) => void, React.Dispatch<React.SetStateAction<T[]>>] {
  const [list, setList] = useState<Array<T>>(initialValue);
  const push = (item: T) => {
    setList((_list) => [..._list, item]);
  };

  return [list, push, setList];
}

export function useIndexedList<T = any>(
  initialValue: Array<T> = []
): [Array<T>, (item: T) => void, (item: T) => void, (item: T) => boolean] {
  const [list, setList] = useState<Array<T>>(initialValue);

  const add = (item: T) => {
    setList((_list) => [..._list, item]);
  };

  const remove = (item: T) => {
    setList((_list) => _list.filter((_item: T) => item.id !== _item.id));
  };

  const exists = (item: T) => {
    const foundItem = list.find((_item: T) => item.id === _item.id);
    return !!foundItem;
  };
  return [list, add, remove, exists];
}
