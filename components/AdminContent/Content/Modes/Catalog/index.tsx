"use client"

import { useState } from "react"
import styles from "./style.module.css"
import { DeleteIcon, EditIcon } from "@/ui/Icons"
import Image from "next/image"

const Catalog = () => {
    const [data, setData] = useState([
        { id: "1", data: { title: "Резинотехнические изделия", image: "/Home_Item_1.png", text: "Название товара Название товара Название товара Название товара Название товара Название товара" } },
        { id: "2", data: { title: "Асбестотехнические изделия", image: "/Home_Item_2.png", text: "Название товара Название товара Название товара Название товара Название товара Название товара" } },
        { id: "3", data: { title: "Электроизоляционные материалы", image: "/Home_Item_3.png", text: "Название товара Название товара Название товара Название товара Название товара Название товара" } },
        { id: "4", data: { title: "Полимерные материалы", image: "/Home_Item_4.png", text: "Название товара Название товара Название товара Название товара Название товара Название товара" } },
    ])

    return (
        <div className={styles.Filter}>
            <h1>Каталог</h1>

            {data.map((item, index) => (
                <div key={index} className={styles.Item}>
                    <div className={styles.ItemBox}>
                        <Image src={item.data.image} width={100} height={100} alt="" />

                        <div className={styles.Data}>
                            <h3>{item.data.title}</h3>
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

export default Catalog