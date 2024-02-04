"use client"

import Item from "@/ui/Item"
import styles from "./style.module.css"

const CatalogItems = () => {
    const items = [
        { image: "/Home_Item_4.png", title: "Картон асбестовый КАОН-3, 2x1000x800мм. ТУ 23.99.11.130-003-41519004-2019", available: true, price: 60.39 },
        { image: "/Home_Item_4.png", title: "Картон асбестовый КАОН-3, 2x1000x800мм. ТУ 23.99.11.130-003-41519004-2019", available: true, price: 60.39 },
        { image: "/Home_Item_4.png", title: "Картон асбестовый КАОН-3, 2x1000x800мм. ТУ 23.99.11.130-003-41519004-2019", available: true, price: 60.39 },
        { image: "/Home_Item_4.png", title: "Картон асбестовый КАОН-3, 2x1000x800мм. ТУ 23.99.11.130-003-41519004-2019", available: true, price: 60.39 },
        { image: "/Home_Item_4.png", title: "Картон асбестовый КАОН-3, 2x1000x800мм. ТУ 23.99.11.130-003-41519004-2019", available: false, price: 60.39 },
        { image: "/Home_Item_4.png", title: "Картон асбестовый КАОН-3, 2x1000x800мм. ТУ 23.99.11.130-003-41519004-2019", available: true, price: 60.39 },
    ]

    return (
        <div className={styles.List}>
            {items.map((item, index) => (
                <Item item={item} key={index} />
            ))}
        </div>
    )
}

export default CatalogItems