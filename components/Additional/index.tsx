"use client"

import styles from "./style.module.css"

const Additional = () => {
    const items = [
        { name: "Вес, кг", value: "16.1" },
        { name: "Длина, мм", value: "1560" },
        { name: "Марка товара", value: "ПК" },
        { name: "Стандарт", value: "ГОСТ 481-80" },
        { name: "Толщина, мм", value: "4" },
        { name: "Ширина, мм", value: "1030" },
        { name: "Страна производитель", value: "Россия" },
    ]

    return (
        <div className={styles.Additional} id="Additional">
            <h2>Характеристики</h2>

            <div className={styles.Box}>
                {items.map((item, index) => (
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