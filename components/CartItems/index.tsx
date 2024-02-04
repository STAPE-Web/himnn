import CartItem from "@/ui/CartItem"
import styles from "./style.module.css"

const CartItems = () => {
    const items = [
        { image: "/Item.png", title: "Паронит листовой ПК, 4x1030x1560мм, ГОСТ 481-80", price: 1190.13 },
        { image: "/Item.png", title: "Паронит листовой ПК, 4x1030x1560мм, ГОСТ 481-80", price: 1190.13 },
    ]

    return (
        <div className={styles.CartItems}>
            <div className={styles.Top}>
                <div>Товары</div>
                <div>
                    <div>Количество</div>
                    <div>Цена</div>
                    <div>Сумма</div>
                </div>
            </div>

            <div className={styles.List}>
                {items.map((item, index) => (
                    <CartItem key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default CartItems