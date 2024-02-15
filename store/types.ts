export default interface State {
    search: boolean;
    call: boolean

    changeSearch: (value: boolean) => void
    changeCall: (value: boolean) => void
}