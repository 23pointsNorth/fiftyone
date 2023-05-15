import React from "react";
import {
  ReadOnlySelectorOptions,
  ReadWriteSelectorOptions,
  selector,
} from "recoil";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Setter = ReadWriteSelectorOptions<any>["set"];

let effectStore_INTERNAL: Map<string, Setter>;

export function SelectorEffectContext({
  setters,
  children,
}: React.PropsWithChildren<{
  setters: Map<string, Setter>;
}>) {
  effectStore_INTERNAL = setters;

  return <>{children}</>;
}

export function selectorWithEffect<T>(
  options: ReadOnlySelectorOptions<T> & {
    set?:
      | ((newValue: Parameters<ReadWriteSelectorOptions<T>["set"]>[1]) => void)
      | boolean;
  },
  itemKey?: string
) {
  return selector({
    ...options,
    set: (...params) => {
      const key = itemKey || options.key;

      if (options.set instanceof Function) {
        options.set(params[1]);
      } else if (options.set) {
        const set = effectStore_INTERNAL.get(key);
        if (!set) {
          throw new Error(`No setter for selector '${key}' found`);
        }
        set(...params);
      }
    },
  });
}
