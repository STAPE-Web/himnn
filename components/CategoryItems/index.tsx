"use client"

import Image from "next/image"
import styles from "./style.module.css"
import { useRouter } from "next/navigation"

const CategoryItems = () => {
    const router = useRouter()

    const items = [
        { image: "/Home_Item_4.png", title: "Асбокартон", description: "ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание" },
        { image: "/Home_Item_4.png", title: "Паронит листовой", description: "ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание" },
        { image: "/Home_Item_4.png", title: "Листы асбостальные", description: "ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание" },
        { image: "/Home_Item_4.png", title: "Асботкань", description: "ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание" },
        { image: "/Home_Item_4.png", title: "Асбошнур", description: "ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание" },
        { image: "/Home_Item_4.png", title: "Сальниковые набивки", description: "ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание" },
    ]

    return (
        <div className={styles.List}>
            {items.map((item, index) => (
                <div key={index} className={styles.Item} onClick={() => router.push("/category/asbokarton")}>
                    <Image src={item.image} width={220} height={220} alt="" />

                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryItems