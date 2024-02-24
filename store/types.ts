export default interface State {
    search: boolean;
    call: boolean
    mobileMneu: boolean
    modal: boolean
    modalMode: "Filter" | "Catalog" | "Catagories" | "Items"

    changeSearch: (value: boolean) => void
    changeCall: (value: boolean) => void
    changeMobileMenu: (value: boolean) => void
    changeModal: (value: boolean) => void
    changeModalMode: (value: "Filter" | "Catalog" | "Catagories" | "Items") => void
}