"use client"

import Counter from "@/components/Counter"
import Image from "next/image"
import { FC, useState } from "react"
import { CloseIcon } from "../Icons"
import styles from "./style.module.css"
import { ICartItem } from "@/types"

interface Props {
    item: ICartItem
}

const CartItem: FC<Props> = ({ item }) => {
    const [count, setCount] = useState("1")

    function removeFromCart() {
        // const cartItems = JSON.parse(localStorage.getItem("cartItems") as string)
        console.log(123)
    }

    return (
        <>
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

            <div className={styles.MobileItem}>
                <div className={styles.Left}>
                    <Image src={item.image} width={220} height={150} alt="" />
                    <Counter setValue={setCount} value={count} />
                </div>

                <div className={styles.Right}>
                    <p>{item.title}</p>

                    <div>
                        <h3>Цена</h3>
                        <p>{item.price} руб./кг</p>
                    </div>

                    <div>
                        <h3>Сумма</h3>
                        {(item.price * Number(count)).toFixed(2)} руб.
                    </div>
                </div>

                <div onClick={() => console.log(123)}>
                    <CloseIcon className={styles.Close} />
                </div>
            </div>
        </>
    )
}

export default CartItem