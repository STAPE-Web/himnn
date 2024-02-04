"use client"

import Counter from "@/components/Counter"
import Image from "next/image"
import { FC, useState } from "react"
import { CloseIcon } from "../Icons"
import styles from "./style.module.css"

type ICartItem = {
    image: string
    title: string
    price: number
}

interface Props {
    item: ICartItem
}

const CartItem: FC<Props> = ({ item }) => {
    const [count, setCount] = useState("1")

    return (
        <div className={styles.Item}>
            <div className={styles.Fill}>
                <Image src={item.image} width={220} height={150} alt="" />
                <p>{item.title}</p>
            </div>

            <div className={styles.Fill}>
                <div className={styles.Fill}>
                    <Counter setValue={setCount} value={count} />
                </div>

                <div className={styles.Fill}>
                    <p>{item.price} руб./кг</p>
                </div>

                <div className={styles.Fill}>
                    {(item.price * Number(count)).toFixed(2)} руб.
                </div>
            </div>

            <CloseIcon className={styles.Close} />
        </div>
    )
}

export default CartItem