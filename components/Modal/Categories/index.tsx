import useGlobalStore from "@/store"
import styles from "./style.module.css"
import { CategoriesAPI } from "@/api"
import Input from "@/ui/Input"
import Textarea from "@/ui/Textarea"
import ButtonDefault from "@/ui/Buttons/Default"

const Category = () => {
    const categoryData = useGlobalStore(state => state.categoryData)
    const changeCategoryData = useGlobalStore(state => state.changeCategoryData)
    const changeModal = useGlobalStore(state => state.changeModal)

    function handleInput(type: "title" | "text" | "category", value: string) {
        if (categoryData !== null) {
            if (type === "title") changeCategoryData({ id: categoryData?.id, data: { ...categoryData?.data, title: value } })
            if (type === "text") changeCategoryData({ id: categoryData?.id, data: { ...categoryData?.data, text: value } })
            if (type === "category") changeCategoryData({ id: categoryData?.id, data: { ...categoryData?.data, category: value } })
        }
    }

    async function updateItem() {
        if (categoryData !== null) {
            await CategoriesAPI.update(categoryData?.id, categoryData)
            changeModal(false)
        }
    }

    return (
        <div className={styles.Box} onClick={e => e.stopPropagation()}>
            <div className={styles.Row}>
                <h2>{categoryData?.data.title}</h2>
            </div>

            <div className={styles.List}>
                <Input label="Название" onChange={e => handleInput("title", e.target.value)} type="text" value={categoryData?.data.title || ""} />
                <Input label="Категория" onChange={e => handleInput("category", e.target.value)} type="text" value={categoryData?.data.category || ""} />
                <Textarea label="Описание" onChange={e => handleInput("text", e.target.value)} value={categoryData?.data.text || ""} />
                <ButtonDefault onClick={() => updateItem()}>Сохранить</ButtonDefault>
            </div>
        </div>
    )
}

export default Category