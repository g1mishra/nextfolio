import { atom } from 'jotai';

export const selectedTagAtom = atom<{ [K: string]: boolean }>({ react: true });
