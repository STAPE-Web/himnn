"use client"

import ButtonDefault from "@/ui/Buttons/Default"
import styles from "./style.module.css"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"
import { CatalogAPI } from "@/api"
import { ICatalog } from "@/types"
import useEncoding from "@/hooks/useEnconding"


const ListItems = () => {
    const router = useRouter()
    const [data, setData] = useState<ICatalog[]>([])

    async function getAllCatalogs() {
        const result = await CatalogAPI.getAll()
        setData(result)
    }

    useEffect(() => {
        getAllCatalogs()
    }, [])

    const { transliterateText } = useEncoding()

    return (
        <div className={styles.Items}>
            <h2>Наша продукция</h2>

            <div className={styles.List}>
                {data.map((item, index) => (
                    <div key={index} className={styles.Item}>
                        <Image src={item.data.image} width={300} height={250} alt="" />

                        <div>
                            <h3>{item.data.title}</h3>
                            <p>{item.data.text}</p>
                            <ButtonDefault onClick={() => router.push(`/category?c=${transliterateText(item.data.title)}`)}>Смотреть</ButtonDefault>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListItems