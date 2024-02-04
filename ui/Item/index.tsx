"use client"

import { IItem } from "@/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"
import styles from "./style.module.css"
import ButtonSmall from "../Buttons/Small"
import { CheckIcon, CloseIcon } from "../Icons"
import Counter from "@/components/Counter"

interface Props {
    item: IItem
}

const Item: FC<Props> = ({ item }) => {
    const [active, setActive] = useState(false)
    const router = useRouter()
    const [count, setCount] = useState("1")

    return (
        <div
            onClick={() => router.push("/item")}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={`${styles.Item} ${active ? styles.Active : ""}`}
        >
            <Image alt="" src={item.image} width={280} height={200} />

            <div className={styles.Box}>
                <h3>{item.title}</h3>

                <div className={styles.Available}>
                    {item.available
                        ? <div>
                            <CheckIcon />
                            <p>Есть в наличии</p>
                        </div>
                        : <div className={styles.Not}>
                            <CloseIcon />
                            <p>Нет в наличии</p>
                        </div>
                    }
                </div>

                <h4>{item.price} руб./кг</h4>

                <div className={styles.Controlls} onClick={e => e.stopPropagation()}>
                    {item.available
                        ? <>
                            <Counter value={count} setValue={setCount} />
                            <ButtonSmall onClick={() => ({})}>В корзину</ButtonSmall>
                        </>
                        : <ButtonSmall onClick={() => ({})}>Под заказ</ButtonSmall>
                    }
                </div>
            </div>
        </div>
    )
}

export default Item