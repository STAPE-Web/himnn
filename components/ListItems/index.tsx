"use client"

import ButtonDefault from "@/ui/Buttons/Default"
import styles from "./style.module.css"
import { useRouter } from "next/navigation"
import Image from "next/image"

const ListItems = () => {
    const router = useRouter()

    const items = [
        { image: "/Home_Item_1.png", title: "Резинотехнические изделия", description: "Краткое описание Краткое описание Краткое описание" },
        { image: "/Home_Item_1.png", title: "Асбестотехнические изделия", description: "Краткое описание Краткое описание Краткое описание" },
        { image: "/Home_Item_2.png", title: "Электроизоляционные материалы", description: "Краткое описание Краткое описание Краткое описание" },
        { image: "/Home_Item_3.png", title: "Полимерные материалы", description: "Краткое описание Краткое описание Краткое описание" },
    ]

    return (
        <div className={styles.Items}>
            <h2>Наша продукция</h2>

            <div className={styles.List}>
                {items.map((item, index) => (
                    <div key={index} className={styles.Item}>
                        <Image src={item.image} width={300} height={250} alt="" />

                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <ButtonDefault onClick={() => router.push("/category")}>Смотреть</ButtonDefault>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListItems