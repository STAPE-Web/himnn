"use client"

import styles from "./style.module.css"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ICatalog, ICategory } from "@/types"
import { CatalogAPI, CategoriesAPI } from "@/api"
import { useRouter } from "next/navigation"

const Categories = () => {
    const router = useRouter()

    const [data, setData] = useState<ICatalog[]>([])
    const [categories, setCategories] = useState<ICategory[]>([])

    async function getAllCatalogs() {
        const result = await CatalogAPI.getAll()
        const catResult = await CategoriesAPI.getAll()
        setData(result)
        setCategories(catResult)
    }
    useEffect(() => {
        getAllCatalogs()
    }, [])

    return (
        <div className={styles.Items}>
            <h2>Все товары</h2>

            <div className={styles.List}>
                {data.map((item, index) => (
                    <div key={index} className={styles.Item} onClick={() => router.push(`/category?c=${item.data.title.toLowerCase().replace(/ /g, '-')}`)}>
                        <Image src={item.data.image} width={280} height={250} alt="" />

                        <div>
                            <h3>{item.data.title}</h3>
                            <p>{categories.map((cat) => cat.data.category === item.data.title ? ` ${cat.data.title} ·` : "").join('').slice(0, -1)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories