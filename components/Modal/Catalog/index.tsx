import useGlobalStore from "@/store"
import styles from "./style.module.css"
import { CatalogAPI } from "@/api"
import Input from "@/ui/Input"
import Textarea from "@/ui/Textarea"
import ButtonDefault from "@/ui/Buttons/Default"

const Catalog = () => {
    const catalogData = useGlobalStore(state => state.catalogData)
    const changeCatalogData = useGlobalStore(state => state.changeCatalogData)
    const changeModal = useGlobalStore(state => state.changeModal)
    const modalMode = useGlobalStore(state => state.modalMode)

    function handleInput(type: "title" | "text", value: string) {
        if (catalogData !== null) {
            if (type === "title") changeCatalogData({ id: catalogData?.id, data: { ...catalogData?.data, title: value } })
            if (type === "text") changeCatalogData({ id: catalogData?.id, data: { ...catalogData?.data, text: value } })
        }
    }

    async function updateItem() {
        if (catalogData !== null) {
            await CatalogAPI.update(catalogData?.id, catalogData)
            changeModal(false)
        }
    }

    async function CreateItem() {
        if (catalogData !== null) {
            await CatalogAPI.create(catalogData)
            changeModal(false)
        }
    }

    return (
        <div className={styles.Box} onClick={e => e.stopPropagation()}>
            <div className={styles.Row}>
                <h2>{catalogData?.data.title}</h2>
            </div>

            <div className={styles.List}>
                <Input label="Название" onChange={e => handleInput("title", e.target.value)} type="text" value={catalogData?.data.title || ""} />
                <Textarea label="Описание" onChange={e => handleInput("text", e.target.value)} value={catalogData?.data.text || ""} />
                {modalMode === "AddCatalog"
                    ? <ButtonDefault onClick={() => CreateItem()}>Создать</ButtonDefault>
                    : <ButtonDefault onClick={() => updateItem()}>Сохранить</ButtonDefault>
                }
            </div>
        </div>
    )
}

export default Catalog