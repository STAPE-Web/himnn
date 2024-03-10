import useGlobalStore from "@/store"
import styles from "./style.module.css"
import { CatalogAPI, CategoriesAPI, FilterAPI, ItemsAPI } from "@/api"
import Input from "@/ui/Input"
import Textarea from "@/ui/Textarea"
import ButtonDefault from "@/ui/Buttons/Default"
import Checkbox2 from "@/ui/Checkbox2"
import { ICatalog, ICategory, IFilter, IItemFilter } from "@/types"
import { useCallback, useEffect, useState } from "react"
import Select from "@/ui/Select"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "@/firebase"
import { CheckIcon, ImageIcon } from "@/ui/Icons"

const Items = () => {
    const itemData = useGlobalStore(state => state.itemData)
    const changeitemData = useGlobalStore(state => state.changeItemData)
    const changeModal = useGlobalStore(state => state.changeModal)
    const modalMode = useGlobalStore(state => state.modalMode)

    const [catalog, setCatalog] = useState<ICatalog[]>([])
    const [subcategory, setSubcategory] = useState<ICategory[]>([])
    const [filter, setFilter] = useState<IFilter[]>([])
    const [image, setImage] = useState<any>([])

    const getAllCatalogs = useCallback(async () => {
        const catResult = await CatalogAPI.getAll()
        const result = await CategoriesAPI.getAll()
        const filterResult = await FilterAPI.getAll()
        setCatalog(catResult)
        setSubcategory(result)
        setFilter(filterResult)
    }, [])

    useEffect(() => {
        getAllCatalogs()
    }, [])

    function handleInput(type: "title" | "text" | "artikul" | "price" | "subcategory" | "category" | "seotitle" | "seodescription", value: string) {
        if (itemData !== null) {
            if (type === "title") changeitemData({ id: itemData?.id, data: { ...itemData?.data, title: value } })
            if (type === "artikul") changeitemData({ id: itemData?.id, data: { ...itemData?.data, artikul: value } })
            if (type === "text") changeitemData({ id: itemData?.id, data: { ...itemData?.data, text: value } })
            if (type === "price") changeitemData({ id: itemData?.id, data: { ...itemData?.data, price: Number(value) } })
            if (type === "subcategory") changeitemData({ id: itemData?.id, data: { ...itemData?.data, subcategory: value } })
            if (type === "category") changeitemData({ id: itemData?.id, data: { ...itemData?.data, category: value } })
            if (type === "seodescription") changeitemData({ id: itemData?.id, data: { ...itemData?.data, seo: { ...itemData.data.seo, description: value } } })
            if (type === "seotitle") changeitemData({ id: itemData?.id, data: { ...itemData?.data, seo: { ...itemData.data.seo, title: value } } })
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

    async function CreateItem() {
        if (itemData !== null) {
            await ItemsAPI.create(itemData)
            changeModal(false)
        }
    }

    function setCategory(value: string) {
        if (itemData !== null) {
            changeitemData({ id: itemData?.id, data: { ...itemData?.data, category: value } })
        }
    }

    function setSubCategory(value: string) {
        if (itemData !== null) {
            changeitemData({ id: itemData?.id, data: { ...itemData?.data, subcategory: value } })
        }
    }

    function setFilterItem(value: string, index: number) {
        if (itemData !== null) {
            if (itemData?.data.filterData !== undefined) {
                let filterData = itemData?.data.filterData
                let indexFilter = filterData[index]
                const newItem: IItemFilter = { ...indexFilter, value: value }
                filterData[index] = newItem
                changeitemData({ id: itemData?.id, data: { ...itemData?.data, filterData: filterData } })
            } else {
                const filterData: IItemFilter[] = filter.map((item) => ({
                    name: item.data.title,
                    value: ""
                }))
                const indexFilter = filterData[index]
                const newItem: IItemFilter = { ...indexFilter, value: value }
                filterData[index] = newItem
                changeitemData({ id: itemData?.id, data: { ...itemData?.data, filterData: filterData } })
            }
        }
    }

    const loadImage = useCallback(async (path: string) => {
        if (path !== "") {
            const imageRef = ref(storage, path);

            try {
                const url = await getDownloadURL(imageRef);
                if (itemData !== null) {
                    changeitemData({ id: itemData?.id, data: { ...itemData?.data, image: url } })
                }
            } catch (error) {
                console.error("Error getting download URL: ", error);
            }
        }
    }, []);

    useEffect(() => {
        if (image.length !== 0) {
            const imageRef = ref(storage, `images/${Date.now()}/${image[0]?.name}`);

            uploadBytes(imageRef, image[0]).then(() => {
                loadImage(imageRef.fullPath);
            })
        }
    }, [image, loadImage]);

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

                    <h3>Фото</h3>
                    <input className={styles.UploadInput} id='upload' type="file" onChange={e => setImage(e.target.files)} />
                    <label htmlFor="upload" className={styles.ButtonUpload}>
                        {image.length !== 0
                            ? <>
                                <CheckIcon className={styles.Icon} /> Изображение загружено
                            </>
                            : <>
                                <ImageIcon className={styles.Icon} /> Загрузить изображение
                            </>
                        }
                    </label>

                    <Input label="Артикул" onChange={e => handleInput("artikul", e.target.value)} type="text" value={itemData?.data.artikul || ""} />
                    <Input label="Цена" onChange={e => handleInput("price", e.target.value)} type="number" value={String(itemData?.data.price) || ""} />
                    <label>Категория</label>
                    <Select array={catalog} value={itemData?.data.category || ""} setValue={setCategory} />
                    {itemData.data.category.length !== 0 && <>
                        <label>Подкатегория</label>
                        <Select array={subcategory.filter(i => i.data.category === itemData?.data.category)} value={itemData?.data.subcategory || ""} setValue={setSubCategory} />
                    </>}
                    <Textarea label="Описание" onChange={e => handleInput("text", e.target.value)} value={itemData?.data.text || ""} />

                    <h3>Дополнительно</h3>
                    <Input label="Страна производитель" onChange={e => handleAdditional("creator", e.target.value)} type="text" value={itemData?.data.additional.creator || ""} />
                    <Input label="Марка товара" onChange={e => handleAdditional("mark", e.target.value)} type="text" value={itemData?.data.additional.mark || ""} />
                    <Input label="Стандарт" onChange={e => handleAdditional("standart", e.target.value)} type="text" value={itemData?.data.additional.standart || ""} />
                    <Input label="Вес, кг" onChange={e => handleAdditional("weight", e.target.value)} type="number" value={String(itemData?.data.additional.weight) || ""} />
                    <Input label="Длина, мм" onChange={e => handleAdditional("height", e.target.value)} type="number" value={String(itemData?.data.additional.height) || ""} />
                    <Input label="Толщина, мм" onChange={e => handleAdditional("thickness", e.target.value)} type="number" value={String(itemData?.data.additional.thickness) || ""} />
                    <Input label="Ширина, мм" onChange={e => handleAdditional("weight", e.target.value)} type="number" value={String(itemData?.data.additional.weight) || ""} />

                    <h3>Привязка к фильтру</h3>
                    <div className={styles.Filter}>
                        {filter.map((item, index) => (
                            <div key={index} className={styles.FilterItem}>
                                <h4>{item.data.title}</h4>
                                <Select array={item.data.array} value={itemData?.data.filterData !== undefined
                                    ? itemData?.data.filterData[index].value
                                    : ""
                                } setValue={setFilterItem} index={index} />
                            </div>
                        ))}
                    </div>

                    <h3>SEO</h3>
                    <Input label="Заголовок" onChange={e => handleInput("seotitle", e.target.value)} type="text" value={itemData?.data.seo.title || ""} />
                    <Textarea label="Описание" onChange={e => handleInput("seodescription", e.target.value)} value={itemData?.data.seo.description || ""} />
                </div>

                <div className={styles.Button}>
                    {modalMode === "AddItems"
                        ? <ButtonDefault onClick={() => CreateItem()}>Создать</ButtonDefault>
                        : <ButtonDefault onClick={() => updateItem()}>Сохранить</ButtonDefault>
                    }
                </div>
            </>}
        </div>
    )
}

export default Items