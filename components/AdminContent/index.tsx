"use client"

import { useState } from "react"
import Content from "./Content"
import Sidebar from "./Sidebar"
import styles from "./style.module.css"

const AdminContent = () => {
    const [state, setState] = useState<"Фильтр" | "Каталог" | "Категории" | "Товары">("Фильтр")

    return (
        <main className={styles.AdminContent}>
            <Sidebar state={state} setState={setState} />
            <Content state={state} />
        </main>
    )
}

export default AdminContent