export default interface State {
    search: boolean;
    call: boolean
    mobileMneu: boolean

    changeSearch: (value: boolean) => void
    changeCall: (value: boolean) => void
    changeMobileMenu: (value: boolean) => void
}