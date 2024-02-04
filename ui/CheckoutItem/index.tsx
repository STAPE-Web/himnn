"use client"

import Image from "next/image"
import { FC } from "react"
import styles from "./style.module.css"

type ICartItem = {
    image: string
    title: string
    price: number
    count: number
}

interface Props {
    item: ICartItem
}

const CheckoutItem: FC<Props> = ({ item }) => {

    return (
        <div className={styles.Item}>
            <div className={styles.Fill}>
                <Image src={item.image} width={220} height={150} alt="" />
                <p>{item.title}</p>
            </div>

            <div className={styles.Fill}>
                <div className={styles.Fill}>
                    <p>{item.count}</p>
                </div>

                <div className={styles.Fill}>
                    <p>{item.price} руб./кг</p>
                </div>

                <div className={styles.Fill}>
                    {(item.price * Number(item.count)).toFixed(2)} руб.
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem