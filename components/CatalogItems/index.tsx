"use client"

import Item from "@/ui/Item"
import styles from "./style.module.css"
import { FC, useEffect, useState } from "react"
import { ItemsAPI } from "@/api"
import { IItems } from "@/types"

interface Props {
    category: string
    subcategory: string
    filterData: string[]
    items: string[]
    min: string
    max: string
}

const CatalogItems: FC<Props> = ({ category, subcategory, filterData, items, min, max }) => {
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
            {data.filter(i => i.data.category.toLowerCase() === category.toLowerCase().replace(/-/g, ' '))
                .filter(i => subcategory !== "" ? i.data.subcategory.toLowerCase() === subcategory.toLowerCase().replace(/-/g, ' ') : true)
                .filter(i => filterData.length === 0 ? true :
                    filterData.some(filterItem =>
                        i.data && i.data.filterData && Array.isArray(i.data.filterData) &&
                        i.data.filterData.some(value =>
                            typeof value.value === 'string' && value.value.includes(filterItem)
                        )
                    )
                )

                .filter(i => i.data.inStock === (items.length !== 0))
                .filter(i => {
                    const price = Number(i.data.price);
                    return (!isNaN(Number(min)) && !isNaN(Number(max))) ? price >= Number(min) && price <= Number(max) : true;
                })
                .map((item, index) => (
                    <Item item={item} index={index} key={index} />
                ))}
        </div>
    )
}

export default CatalogItems