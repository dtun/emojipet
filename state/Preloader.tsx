import { useAtomValue } from 'jotai';
import { actionAtom } from './action';

function Preloader() {
  useAtomValue(actionAtom); // Trigger the "onMount" function that will load the data from the store

  return null;
}

export { Preloader };
