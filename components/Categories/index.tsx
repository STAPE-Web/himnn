"use client"

import styles from "./style.module.css"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const Categories = () => {
    const router = useRouter()

    const items = [
        { image: "/Home_Item_1.png", title: "Резинотехнические изделия", description: "Название товара Название товара Название товара Название товара Название товара Название товара" },
        { image: "/Home_Item_4.png", title: "Асбестотехнические изделия", description: "Название товара Название товара Название товара Название товара Название товара Название товара" },
        { image: "/Home_Item_2.png", title: "Электроизоляционные материалы", description: "Название товара Название товара Название товара Название товара Название товара Название товара" },
        { image: "/Home_Item_3.png", title: "Полимерные материалы", description: "Название товара Название товара Название товара Название товара Название товара Название товара" },
    ]

    return (
        <Link href="/category">
            <div className={styles.Items}>
                <h2>Все товары</h2>

                <div className={styles.List}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.Item}>
                            <Image src={item.image} width={280} height={250} alt="" />

                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default Categories