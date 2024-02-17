"use client"

import { useState } from "react"
import CheckList from "../CheckList"
import Calculator from "../Calculator"
import styles from "./style.module.css"
import ButtonSmall from "@/ui/Buttons/Small"
import { CloseIcon, FilterIcon } from "@/ui/Icons"

const Filter = () => {
    const sizeArray = ["15 x 15 мм", "16 x 16 мм"]
    const itemsArray = ["В наличии (100)"]
    const developerArray = ["Россия", "Китай", "Казахстан"]

    const [size, setSize] = useState<string[]>([])
    const [items, setItems] = useState<string[]>([])
    const [developer, setDeveloper] = useState<string[]>([])

    const [min, setMin] = useState("10")
    const [max, setMax] = useState("1000")

    const [active, setActive] = useState(false)

    return (
        <>
            <div className={styles.FilterButton} onClick={() => setActive(!active)}>
                <FilterIcon />
                Фильтр
            </div>

            <div className={`${styles.Filter} ${active ? styles.Active : ""}`}>
                <div className={styles.Row}>
                    <h4>Цена</h4>
                    <Calculator max={max} min={min} setMax={setMax} setMin={setMin} />
                </div>

                <div className={styles.Row}>
                    <CheckList array={itemsArray} setValue={setItems} value={items} />
                </div>

                <div className={styles.Row}>
                    <h4>Размер</h4>
                    <CheckList array={sizeArray} setValue={setSize} value={size} />
                </div>

                <div className={styles.Row}>
                    <h4>Производитель</h4>
                    <CheckList array={developerArray} setValue={setDeveloper} value={developer} />
                </div>

                <div className={styles.Buttons}>
                    <ButtonSmall onClick={() => ({})}>Показать</ButtonSmall>
                    <button className={styles.ClearButton}>
                        <CloseIcon />
                        <p>Сбросить</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Filter