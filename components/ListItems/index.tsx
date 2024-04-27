"use client"

import ButtonDefault from "@/ui/Buttons/Default"
import styles from "./style.module.css"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"
import { CatalogAPI, CategoriesAPI } from "@/api"
import { ICatalog, ICategory } from "@/types"

const ListItems = () => {
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
            <h2>Наша продукция</h2>

            <div className={styles.List}>
                {data.map((item, index) => (
                    <div key={index} className={styles.Item}>
                        <img src={item.data.image} width={300} height={250} alt="" />

                        <div>
                            <h3>{item.data.title}</h3>
                            <p>{categories.map((cat) => cat.data.category === item.data.title ? ` ${cat.data.title} ·` : "").join('').slice(0, -1)}</p>
                            <ButtonDefault onClick={() => router.push(`/category?c=${item.data.title.toLowerCase().replace(/ /g, '-')}`)}>Смотреть</ButtonDefault>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListItems
