"use client"

import ButtonDefault from "@/ui/Buttons/Default"
import styles from "./style.module.css"
import { useRouter } from "next/navigation"

const Slider = () => {
    const router = useRouter()

    return (
        <section className={styles.Slider}>
            <div className={styles.Box}>
                <h1>Паронит ПОН-Б 3мм (1500х1700)</h1>
                <ul>
                    <li>ГОСТ 481-80</li>
                    <li>В наличии </li>
                </ul>

                <ButtonDefault onClick={() => router.push("/catalog")}>Перейти в каталог</ButtonDefault>
            </div>

            <div className={styles.Controlls}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export default Slider