"use client"

import { useEffect, useState } from "react"
import styles from "./style.module.css"
import { DeleteIcon, EditIcon } from "@/ui/Icons"
import Image from "next/image"
import { ICategory } from "@/types"
import { CategoriesAPI } from "@/api"
import useGlobalStore from "@/store"

const Categories = () => {
    const changeModal = useGlobalStore(state => state.changeModal)
    const changeModalMode = useGlobalStore(state => state.changeModalMode)
    const changeCategoryData = useGlobalStore(state => state.changeCategoryData)
    const [data, setData] = useState<ICategory[]>([])

    async function getAllCatalogs() {
        const result = await CategoriesAPI.getAll()
        setData(result)
    }

    useEffect(() => {
        getAllCatalogs()
    }, [getAllCatalogs])

    async function deleteItem(id: string) {
        await CategoriesAPI.delete(id)
        getAllCatalogs()
    }

    function editItem(item: ICategory) {
        changeModal(true)
        changeModalMode("Catagories")
        changeCategoryData(item)
    }

    return (
        <div className={styles.Filter}>
            <h1>Категории</h1>

            {data.map((item, index) => (
                <div key={index} className={styles.Item}>
                    <div className={styles.ItemBox}>
                        <Image src={item.data.image} width={100} height={100} alt="" />

                        <div className={styles.Data}>
                            <h3>{item.data.title} · <span>{item.data.category}</span></h3>
                            <p>{item.data.text}</p>
                        </div>
                    </div>

                    <div>
                        <button className={styles.Edit} onClick={() => editItem(item)}><EditIcon /></button>
                        <button className={styles.Delete} onClick={() => deleteItem(item.id)}><DeleteIcon /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Categories