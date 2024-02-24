"use client"

import { useState } from "react"
import styles from "./style.module.css"
import { DeleteIcon, EditIcon } from "@/ui/Icons"
import Image from "next/image"

const Items = () => {
    const [data, setData] = useState([
        { id: "1", data: { title: "Паронит листовой ПК, 4x1030x1560мм, ГОСТ 481-80", artikul: "12312312", image: "/Item.png", text: "Кислота, щелочи, окислители, нитрозные и другие агрессивные среды" } },
        { id: "2", data: { title: "Паронит листовой ПК, 4x1030x1560мм, ГОСТ 481-80", artikul: "12312312", image: "/Item.png", text: "Кислота, щелочи, окислители, нитрозные и другие агрессивные среды" } },
        { id: "3", data: { title: "Паронит листовой ПК, 4x1030x1560мм, ГОСТ 481-80", artikul: "12312312", image: "/Item.png", text: "Кислота, щелочи, окислители, нитрозные и другие агрессивные среды" } },
        { id: "4", data: { title: "Паронит листовой ПК, 4x1030x1560мм, ГОСТ 481-80", artikul: "12312312", image: "/Item.png", text: "Кислота, щелочи, окислители, нитрозные и другие агрессивные среды" } },
    ])

    return (
        <div className={styles.Filter}>
            <h1>Категории</h1>

            {data.map((item, index) => (
                <div key={index} className={styles.Item}>
                    <div className={styles.ItemBox}>
                        <Image src={item.data.image} width={100} height={100} alt="" />

                        <div className={styles.Data}>
                            <h3>{item.data.title} · <span>{item.data.artikul}</span></h3>
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

export default Items