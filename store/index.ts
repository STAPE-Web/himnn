import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import State from './types'

const useGlobalStore = create<State>()(devtools((set) => ({
    search: false,
    call: false,
    mobileMneu: false,

    changeSearch: (value: boolean) => set({ search: value }),
    changeCall: (value: boolean) => set({ call: value }),
    changeMobileMenu: (value: boolean) => set({ mobileMneu: value }),
})))

export default useGlobalStore