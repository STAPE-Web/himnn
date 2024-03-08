"use client"

import { FC } from "react";
import styles from "./style.module.css"

interface Props {
    data: {
        standart: string;
        creator: string;
        thickness: number;
        width: number;
        weight: number;
        mark: string;
        height: number;
    }
}

const Additional: FC<Props> = ({ data }) => {
    const items = [
        { name: "Вес, кг", value: data.weight },
        { name: "Длина, мм", value: data.height },
        { name: "Марка товара", value: data.mark },
        { name: "Стандарт", value: data.standart },
        { name: "Толщина, мм", value: data.thickness },
        { name: "Ширина, мм", value: data.width },
        { name: "Страна производитель", value: data.creator },
    ]

    return (
        <div className={styles.Additional} id="Additional">
            <h2>Характеристики</h2>

            <div className={styles.Box}>
                {items.filter(i => i.value !== "" && i.value !== 0).map((item, index) => (
                    <div key={index} className={styles.Item}>
                        <p>{item.name}</p>
                        <div />
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Additional