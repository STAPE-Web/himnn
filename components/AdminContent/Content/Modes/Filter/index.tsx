"use client"

import { useState } from "react"
import styles from "./style.module.css"
import { DeleteIcon, EditIcon } from "@/ui/Icons"

const Filter = () => {
    const [data, setData] = useState([
        { id: "1", data: { title: "Размер", array: ["15 x 15 мм", "16 x 16 мм"] } },
        { id: "2", data: { title: "Производитель", array: ["Россия", "Китай", "Казахстан"] } },
    ])

    return (
        <div className={styles.Filter}>
            <h1>Фильтр</h1>

            {data.map((item, index) => (
                <div key={index} className={styles.Item}>
                    <h3>{item.data.title}</h3>

                    <div>
                        <button className={styles.Edit}><EditIcon /></button>
                        <button className={styles.Delete}><DeleteIcon /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Filter