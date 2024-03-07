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
    function removeFromCart() {
        const cartItems: ICartItem[] = JSON.parse(localStorage.getItem("cartItems") as string)
        localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(i => i.id !== item.id)))
        window.location.reload()
    }

    function CountChanges(count: string) {
        const newItem: ICartItem = { ...item, count: Number(count) };
        const cartItems: ICartItem[] = JSON.parse(localStorage.getItem("cartItems") as string);
        const index = cartItems.findIndex(cartItem => cartItem.id === newItem.id);
        if (index !== -1) {
            cartItems[index] = newItem;
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            window.location.reload();
        } else {
            console.error("Item not found in cartItems array.");
        }
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
                        <Counter setValue={CountChanges} value={String(item.count)} />
                    </div>

                    <div className={styles.Fill}>
                        <p>{item.price} руб./кг</p>
                    </div>

                    <div className={styles.Fill}>
                        {(item.price * Number(item.count)).toFixed(2)} руб.
                    </div>
                </div>

                <CloseIcon className={styles.Close} onClick={() => removeFromCart()} />
            </div>

            <div className={styles.MobileItem}>
                <div className={styles.Left}>
                    <Image src={item.image} width={220} height={150} alt="" />
                    <Counter setValue={CountChanges} value={String(item.count)} />
                </div>

                <div className={styles.Right}>
                    <p>{item.title}</p>

                    <div>
                        <h3>Цена</h3>
                        <p>{item.price} руб./кг</p>
                    </div>

                    <div>
                        <h3>Сумма</h3>
                        {(item.price * Number(item.count)).toFixed(2)} руб.
                    </div>
                </div>

                <div onClick={() => removeFromCart()}>
                    <CloseIcon className={styles.Close} />
                </div>
            </div>
        </>
    )
}

export default CartItem