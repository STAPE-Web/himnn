"use client"

import { useState } from "react"
import styles from "./style.module.css"

const Tabs = () => {
    const [tab, setTab] = useState("Описание")
    const tabs = ["Описание", "Наличие", "Доставка", "Оплата"]

    return (
        <div className={styles.Tabs}>
            {tabs.map((t, index) => (
                <div onClick={() => setTab(t)} className={tab === t ? styles.Active : ""} key={index}>{t}</div>
            ))}
        </div>
    )
}

export default Tabs