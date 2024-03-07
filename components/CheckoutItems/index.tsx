"use client"

import { ICartItem } from "@/types";
import styles from "./style.module.css"
import CheckoutItem from "@/ui/CheckoutItem"

const CheckoutItems = () => {
    let cartItems: ICartItem[] = [];
    if (typeof window !== 'undefined') {
        cartItems = JSON.parse(localStorage.getItem('cartItems') as string) || [];
    }

    return (
        <div className={styles.CheckoutItems}>
            <div className={styles.Top}>
                <div>Наименование</div>
                <div>
                    <div>Количество</div>
                    <div>Цена</div>
                    <div>Сумма</div>
                </div>
            </div>

            <div className={styles.List}>
                {cartItems.map((item, index) => (
                    <CheckoutItem key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default CheckoutItems