import styles from "./style.module.css"
import CheckoutItem from "@/ui/CheckoutItem"

const CheckoutItems = () => {
    const items = [
        { image: "/Item.png", title: "Паронит листовой ПК, 4x1030x1560мм, ГОСТ 481-80", price: 1190.13, count: 1 },
        { image: "/Item.png", title: "Паронит листовой ПК, 4x1030x1560мм, ГОСТ 481-80", price: 1190.13, count: 1 },
    ]

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
                {items.map((item, index) => (
                    <CheckoutItem key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default CheckoutItems