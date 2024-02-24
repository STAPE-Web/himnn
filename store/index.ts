import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import State from './types'

const useGlobalStore = create<State>()(devtools((set) => ({
    search: false,
    call: false,
    mobileMneu: false,
    modal: false,
    modalMode: "Filter",

    changeSearch: (value: boolean) => set({ search: value }),
    changeCall: (value: boolean) => set({ call: value }),
    changeMobileMenu: (value: boolean) => set({ mobileMneu: value }),
    changeModal: (value: boolean) => set({ modal: value }),
    changeModalMode: (value: "Filter" | "Catalog" | "Catagories" | "Items") => set({ modalMode: value }),
})))

export default useGlobalStore