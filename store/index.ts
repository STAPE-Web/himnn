import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import State from './types'

const useGlobalStore = create<State>()(devtools((set) => ({
    search: false,

    changeSearch: (value: boolean) => set({ search: value }),
})))

export default useGlobalStore