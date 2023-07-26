import { useState } from "react";
export function useObject<T = any>(): any {
  const [obj, setObj] = useState<Record<string, T>>({});
  const add = (element: T) => {
    setObj((_obj) => ({
      ..._obj,
      ...element,
    }));
  };
  return [obj, add];
}
