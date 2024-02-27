import { ICatalog, ICategory, IFilter, IItems } from "@/types";

export default interface State {
    search: boolean;
    call: boolean
    mobileMneu: boolean
    modal: boolean
    modalMode: "Filter" | "Catalog" | "Catagories" | "Items"
    filterData: IFilter | null,
    catalogData: ICatalog | null,
    categoryData: ICategory | null,
    itemData: IItems | null,

    changeSearch: (value: boolean) => void
    changeCall: (value: boolean) => void
    changeMobileMenu: (value: boolean) => void
    changeModal: (value: boolean) => void
    changeModalMode: (value: "Filter" | "Catalog" | "Catagories" | "Items") => void
    changeFilterData: (value: IFilter) => void
    changeCatalogData: (value: ICatalog) => void
    changeCategoryData: (value: ICategory) => void
    changeItemData: (value: IItems) => void
}