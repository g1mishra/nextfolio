import { atom } from 'jotai';

const INITIAL_ABOUT_ME_PAGE = 'bio';
export type aboutAtomPageT = 'bio' | 'diploma' | 'experience' | 'skills';

export const aboutAtomPage = atom<aboutAtomPageT>(INITIAL_ABOUT_ME_PAGE);
