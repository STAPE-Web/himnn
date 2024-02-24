"use client"

import { useState } from "react"
import styles from "./style.module.css"
import { DeleteIcon, EditIcon } from "@/ui/Icons"
import Image from "next/image"

const Categories = () => {
    const [data, setData] = useState([
        { id: "1", data: { title: "Асбокартон", category: "Асбестотехнические изделия", image: "/Home_Item_4.png", text: "ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание" } },
        { id: "2", data: { title: "Паронит листовой", category: "Асбестотехнические изделия", image: "/Home_Item_4.png", text: "ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание" } },
        { id: "3", data: { title: "Листы асбостальные", category: "Асбестотехнические изделия", image: "/Home_Item_4.png", text: "ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание" } },
        { id: "4", data: { title: "Асботкань", category: "Асбестотехнические изделия", image: "/Home_Item_4.png", text: "ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание" } },
        { id: "5", data: { title: "Асбошнур", category: "Асбестотехнические изделия", image: "/Home_Item_4.png", text: "ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание" } },
        { id: "6", data: { title: "Сальниковые набивки", category: "Асбестотехнические изделия", image: "/Home_Item_4.png", text: "ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание" } },
    ])

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
                        <button className={styles.Edit}><EditIcon /></button>
                        <button className={styles.Delete}><DeleteIcon /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Categories