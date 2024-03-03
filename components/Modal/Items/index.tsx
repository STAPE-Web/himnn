import useGlobalStore from "@/store"
import styles from "./style.module.css"
import { ItemsAPI } from "@/api"
import Input from "@/ui/Input"
import Textarea from "@/ui/Textarea"
import ButtonDefault from "@/ui/Buttons/Default"
import Checkbox2 from "@/ui/Checkbox2"

const Items = () => {
    const itemData = useGlobalStore(state => state.itemData)
    const changeitemData = useGlobalStore(state => state.changeItemData)
    const changeModal = useGlobalStore(state => state.changeModal)

    function handleInput(type: "title" | "text" | "artikul" | "price" | "subcategory" | "category", value: string) {
        if (itemData !== null) {
            if (type === "title") changeitemData({ id: itemData?.id, data: { ...itemData?.data, title: value } })
            if (type === "artikul") changeitemData({ id: itemData?.id, data: { ...itemData?.data, artikul: value } })
            if (type === "text") changeitemData({ id: itemData?.id, data: { ...itemData?.data, text: value } })
            if (type === "price") changeitemData({ id: itemData?.id, data: { ...itemData?.data, price: Number(value) } })
            if (type === "subcategory") changeitemData({ id: itemData?.id, data: { ...itemData?.data, subcategory: value } })
            if (type === "category") changeitemData({ id: itemData?.id, data: { ...itemData?.data, category: value } })
        }
    }

    function handleCheckbox(type: "inStock", value: boolean) {
        if (itemData !== null) {
            if (type === "inStock") changeitemData({ id: itemData?.id, data: { ...itemData?.data, inStock: value } })
        }
    }

    function handleAdditional(type: "creator" | "height" | "mark" | "standart" | "thickness" | "weight" | "width", value: string) {
        if (itemData !== null) {
            if (type === "creator") changeitemData({ id: itemData?.id, data: { ...itemData?.data, additional: { ...itemData?.data.additional, creator: value } } })
            if (type === "height") changeitemData({ id: itemData?.id, data: { ...itemData?.data, additional: { ...itemData?.data.additional, height: Number(value) } } })
            if (type === "mark") changeitemData({ id: itemData?.id, data: { ...itemData?.data, additional: { ...itemData?.data.additional, mark: value } } })
            if (type === "standart") changeitemData({ id: itemData?.id, data: { ...itemData?.data, additional: { ...itemData?.data.additional, standart: value } } })
            if (type === "thickness") changeitemData({ id: itemData?.id, data: { ...itemData?.data, additional: { ...itemData?.data.additional, thickness: Number(value) } } })
            if (type === "weight") changeitemData({ id: itemData?.id, data: { ...itemData?.data, additional: { ...itemData?.data.additional, weight: Number(value) } } })
            if (type === "width") changeitemData({ id: itemData?.id, data: { ...itemData?.data, additional: { ...itemData?.data.additional, width: Number(value) } } })
        }
    }

    async function updateItem() {
        if (itemData !== null) {
            await ItemsAPI.update(itemData?.id, itemData)
            changeModal(false)
        }
    }

    return (
        <div className={styles.Box} onClick={e => e.stopPropagation()}>
            {itemData !== null && <>
                <div className={styles.Row}>
                    <h2>{itemData?.data.title}</h2>
                </div>

                <div className={styles.List}>
                    <div className={styles.Checkbox} onClick={() => handleCheckbox("inStock", !itemData?.data.inStock)}>
                        <Checkbox2 state={itemData?.data.inStock} />
                        <p>В наличии</p>
                    </div>
                    <Input label="Название" onChange={e => handleInput("title", e.target.value)} type="text" value={itemData?.data.title || ""} />
                    <Input label="Артикул" onChange={e => handleInput("artikul", e.target.value)} type="number" value={itemData?.data.artikul || ""} />
                    <Input label="Цена" onChange={e => handleInput("price", e.target.value)} type="number" value={String(itemData?.data.price) || ""} />
                    <Input label="Категория" onChange={e => handleInput("title", e.target.value)} type="text" value={itemData?.data.title || ""} />
                    <Input label="Подкатегория" onChange={e => handleInput("subcategory", e.target.value)} type="text" value={itemData?.data.subcategory || ""} />
                    <Textarea label="Описание" onChange={e => handleInput("category", e.target.value)} value={itemData?.data.category || ""} />

                    <h3>Дополнительно</h3>
                    <Input label="Страна производитель" onChange={e => handleAdditional("creator", e.target.value)} type="text" value={itemData?.data.additional.creator || ""} />
                    <Input label="Марка товара" onChange={e => handleAdditional("mark", e.target.value)} type="text" value={itemData?.data.additional.mark || ""} />
                    <Input label="Стандарт" onChange={e => handleAdditional("standart", e.target.value)} type="text" value={itemData?.data.additional.standart || ""} />
                    <Input label="Вес, кг" onChange={e => handleAdditional("weight", e.target.value)} type="number" value={String(itemData?.data.additional.weight) || ""} />
                    <Input label="Длина, мм" onChange={e => handleAdditional("height", e.target.value)} type="number" value={String(itemData?.data.additional.height) || ""} />
                    <Input label="Толщина, мм" onChange={e => handleAdditional("thickness", e.target.value)} type="number" value={String(itemData?.data.additional.thickness) || ""} />
                    <Input label="Ширина, мм" onChange={e => handleAdditional("weight", e.target.value)} type="number" value={String(itemData?.data.additional.weight) || ""} />
                </div>

                <div className={styles.Button}>
                    <ButtonDefault onClick={() => updateItem()}>Сохранить</ButtonDefault>
                </div>
            </>}
        </div>
    )
}

export default Items