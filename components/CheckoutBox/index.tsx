"use client"

import styles from "./style.module.css"

const CheckoutBox = () => {
    return (
        <div className={styles.CheckoutBox}>
            <div className={styles.Row}>
                <h4>Ваш заказ</h4>
                <button>Изменить</button>
            </div>

            <div className={styles.Row}>
                <div className={styles.Column}>
                    <div className={styles.Fill}>
                        <p>Сумма:</p>
                        <p>2299.58 руб.</p>
                    </div>

                    <div className={styles.Fill}>
                        <p>Доставка:</p>
                        <p>100 руб.</p>
                    </div>
                </div>
            </div>

            <div className={styles.Row}>
                <h4>Итого:</h4>
                <h4>2399.58 руб.</h4>
            </div>
        </div>
    )
}

export default CheckoutBox