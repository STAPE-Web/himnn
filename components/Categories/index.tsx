"use client"

import styles from "./style.module.css"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ICatalog } from "@/types"
import { CatalogAPI } from "@/api"
import { useRouter } from "next/navigation"
import useEncoding from "@/hooks/useEnconding"

const Categories = () => {
    const router = useRouter()

    const [data, setData] = useState<ICatalog[]>([])
    const { transliterateText } = useEncoding()

    async function getAllCatalogs() {
        const result = await CatalogAPI.getAll()
        setData(result)
    }

    useEffect(() => {
        getAllCatalogs()
    }, [])

    return (
        <div className={styles.Items}>
            <h2>Все товары</h2>

            <div className={styles.List}>
                {data.map((item, index) => (
                    <div key={index} className={styles.Item} onClick={() => router.push(`/category?c=${transliterateText(item.data.title)}`)}>
                        <Image src={item.data.image} width={280} height={250} alt="" />

                        <div>
                            <h3>{item.data.title}</h3>
                            <p>{item.data.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories