"use client"

import Logo from "@/assets/Logo"
import styles from "./style.module.css"
import { FC } from "react"

interface Props {
    state: string
    setState: React.Dispatch<React.SetStateAction<"Фильтр" | "Каталог" | "Категории" | "Товары">>
}

const Sidebar: FC<Props> = ({ state, setState }) => {
    const pages = ["Фильтр", "Каталог", "Категории", "Товары"]

    return (
        <div className={styles.Sidebar}>
            <Logo className={styles.Logo} />

            <ul>
                {pages.map((page, index) => (
                    <li onClick={() => setState(page as "Фильтр" | "Каталог" | "Категории" | "Товары")} className={state === page ? styles.Active : ""} key={index}>{page}</li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar