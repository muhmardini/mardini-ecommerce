import {create} from 'zustand'
import { immer } from 'zustand/middleware/immer';

type Nav = {
    nav: boolean;
    openNav: () => void;
    closeNav: () => void;
    toggleNav: () => void;
}

export const useNavStore = create<Nav>()(immer((set) => ({
    nav: false,
    openNav: () => set(state => {state.nav = true}),
    closeNav: () => set(state =>{ state.nav = false}),
    toggleNav: () => set(state => {state.nav = !state.nav})
})))


