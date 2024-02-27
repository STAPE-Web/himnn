"use client"

import Item from "@/ui/Item"
import styles from "./style.module.css"
import { useEffect, useState } from "react"
import { ItemsAPI } from "@/api"
import { IItems } from "@/types"

const CatalogItems = () => {
    const items = [
        { image: "/Home_Item_4.png", title: "Картон асбестовый КАОН-3, 2x1000x800мм. ТУ 23.99.11.130-003-41519004-2019", available: true, price: 60.39 },
        { image: "/Home_Item_4.png", title: "Картон асбестовый КАОН-3, 2x1000x800мм. ТУ 23.99.11.130-003-41519004-2019", available: true, price: 60.39 },
        { image: "/Home_Item_4.png", title: "Картон асбестовый КАОН-3, 2x1000x800мм. ТУ 23.99.11.130-003-41519004-2019", available: true, price: 60.39 },
        { image: "/Home_Item_4.png", title: "Картон асбестовый КАОН-3, 2x1000x800мм. ТУ 23.99.11.130-003-41519004-2019", available: true, price: 60.39 },
        { image: "/Home_Item_4.png", title: "Картон асбестовый КАОН-3, 2x1000x800мм. ТУ 23.99.11.130-003-41519004-2019", available: false, price: 60.39 },
        { image: "/Home_Item_4.png", title: "Картон асбестовый КАОН-3, 2x1000x800мм. ТУ 23.99.11.130-003-41519004-2019", available: true, price: 60.39 },
    ]

    const [data, setData] = useState<IItems[]>([])

    async function getAllCatalogs() {
        const result = await ItemsAPI.getAll()
        setData(result)
    }

    useEffect(() => {
        getAllCatalogs()
    }, [])

    return (
        <div className={styles.List}>
            {data.map((item, index) => (
                <Item item={item} key={index} />
            ))}
        </div>
    )
}

export default CatalogItems