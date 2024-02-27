"use client"

import Image from "next/image"
import styles from "./style.module.css"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { ICategory } from "@/types"
import { CategoriesAPI } from "@/api"

const CategoryItems = () => {
    const router = useRouter()
    const [data, setData] = useState<ICategory[]>([])

    async function getAllCatalogs() {
        const result = await CategoriesAPI.getAll()
        setData(result)
    }

    useEffect(() => {
        getAllCatalogs()
    }, [])

    return (
        <div className={styles.List}>
            {data.map((item, index) => (
                <div key={index} className={styles.Item} onClick={() => router.push("/category/asbokarton")}>
                    <Image src={item.data.image} width={220} height={220} alt="" />

                    <div>
                        <h3>{item.data.title}</h3>
                        <p>{item.data.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryItems