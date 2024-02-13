"use client"

import ButtonDefault from "@/ui/Buttons/Default"
import styles from "./style.module.css"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Slider = () => {
    const router = useRouter()
    const [slide, setSlide] = useState(0)

    function fillControlls() {
        let result = []

        for (let i = 0; i < 5; i++) {
            result.push(
                <div key={i} className={i === slide ? styles.Active : ""} onClick={() => setSlide(i)}></div>
            )
        }

        return result
    }

    useEffect(() => {
        setTimeout(() => {
            if (slide === 4) {
                setSlide(0)
            } else {
                setSlide(slide + 1)
            }
        }, 3000)
    }, [slide])

    return (
        <section className={styles.Slider} style={{ background: `url("/Home_Slider_${slide}.png") no-repeat` }}>
            <div className={styles.Box}>
                <h1>Паронит ПОН-Б 3мм (1500х1700)</h1>
                <ul>
                    <li>ГОСТ 481-80</li>
                    <li>В наличии </li>
                </ul>

                <ButtonDefault onClick={() => router.push("/catalog")}>Перейти в каталог</ButtonDefault>
            </div>

            <div className={styles.Controlls}>
                {fillControlls()}
            </div>
        </section>
    )
}

export default Slider