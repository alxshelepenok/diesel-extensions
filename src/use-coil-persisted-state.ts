import { CoilValue, useCoilState } from "@alxshelepenok/diesel";
import { useLocalStorage } from "@alxshelepenok/react-hooks";

import { toKebabCase } from "@/utils";

const useCoilPersistedState = <T>(
  coilValue: CoilValue<T>,
  keyPrefix: string = "diesel:",
): readonly [T, (nextValue: T) => void] => {
  const [value, setValue] = useCoilState(coilValue);

  const [persistedValue, setPersistedValue] = useLocalStorage(
    keyPrefix.concat(toKebabCase(coilValue.key)),
    value,
  );

  return [
    persistedValue,
    (nextValue: T) => {
      setPersistedValue(nextValue);
      return setValue(value);
    },
  ];
};

export default useCoilPersistedState;
