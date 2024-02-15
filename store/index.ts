import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import State from './types'

const useGlobalStore = create<State>()(devtools((set) => ({
    search: false,
    call: false,

    changeSearch: (value: boolean) => set({ search: value }),
    changeCall: (value: boolean) => set({ call: value }),
})))

export default useGlobalStore