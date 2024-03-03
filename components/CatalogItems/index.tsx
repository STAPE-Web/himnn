"use client"

import Item from "@/ui/Item"
import styles from "./style.module.css"
import { useEffect, useState } from "react"
import { ItemsAPI } from "@/api"
import { IItems } from "@/types"

const CatalogItems = () => {
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