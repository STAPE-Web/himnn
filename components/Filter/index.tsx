"use client"

import { useEffect, useState } from "react"
import CheckList from "../CheckList"
import Calculator from "../Calculator"
import styles from "./style.module.css"
import ButtonSmall from "@/ui/Buttons/Small"
import { CloseIcon, FilterIcon } from "@/ui/Icons"
import { IFilter } from "@/types"
import { FilterAPI } from "@/api"

const Filter = () => {
    const itemsArray = ["В наличии (100)"]
    const sizeArray = ["15 x 15 мм", "16 x 16 мм"]
    const developerArray = ["Россия", "Китай", "Казахстан"]

    const [size, setSize] = useState<string[]>([])
    const [items, setItems] = useState<string[]>([])
    const [developer, setDeveloper] = useState<string[]>([])

    const [min, setMin] = useState("10")
    const [max, setMax] = useState("1000")

    const [active, setActive] = useState(false)

    const [data, setData] = useState<IFilter[]>([])
    console.log(data)

    async function getAllCatalogs() {
        const result = await FilterAPI.getAll()
        setData(result)
    }

    useEffect(() => {
        getAllCatalogs()
    }, [])

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

                {data.map((item, index) => (
                    <div className={styles.Row} key={index}>
                        <h4>{item.data.title}</h4>
                        <CheckList array={item.data.array} setValue={setSize} value={size} />
                    </div>
                ))}

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