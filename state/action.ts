import { atom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ActionRecord = {
  type: 'feed' | 'water' | 'play';
  timestamp: 'string';
};

const actionInitialValue: ActionRecord[] = [];

const actionKey = 'actionKey';

const atomWithAsyncStorage = (
  key = actionKey,
  initialValue = actionInitialValue
) => {
  const baseAtom = atom(initialValue);

  baseAtom.onMount = (setValue) => {
    (async () => {
      const item = await AsyncStorage.getItem(key);

      setValue(item ? JSON.parse(item) : []);
    })();
  };

  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === 'function' ? update(get(baseAtom)) : update;

      set(baseAtom, nextValue);

      AsyncStorage.setItem(key, JSON.stringify(nextValue));
    }
  );

  return derivedAtom;
};

const actionAtom = atomWithAsyncStorage();

export { actionAtom, ActionRecord };
