"use client"

import { useCallback, useEffect, useState } from "react"
import styles from "./style.module.css"
import { DeleteIcon, EditIcon } from "@/ui/Icons"
import Image from "next/image"
import { IItems } from "@/types"
import { ItemsAPI } from "@/api"
import useGlobalStore from "@/store"

const Items = () => {
    const changeModal = useGlobalStore(state => state.changeModal)
    const modal = useGlobalStore(state => state.modal)
    const changeModalMode = useGlobalStore(state => state.changeModalMode)
    const changeItemData = useGlobalStore(state => state.changeItemData)
    const [data, setData] = useState<IItems[]>([])

    const getAllCatalogs = useCallback(async () => {
        const result = await ItemsAPI.getAll()
        setData(result)
    }, [modal])

    useEffect(() => {
        getAllCatalogs()
    }, [getAllCatalogs])

    async function deleteItem(id: string) {
        await ItemsAPI.delete(id)
        getAllCatalogs()
    }

    function editItem(item: IItems) {
        changeModal(true)
        changeModalMode("Items")
        changeItemData(item)
    }

    return (
        <div className={styles.Filter}>
            <h1>Товары</h1>

            {data.map((item, index) => (
                <div key={index} className={styles.Item}>
                    <div className={styles.ItemBox}>
                        <Image src={item.data.image} width={100} height={100} alt="" />

                        <div className={styles.Data}>
                            <h3>{item.data.title} · <span>{item.data.artikul}</span></h3>
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

export default Items