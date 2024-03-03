import CartItem from "@/ui/CartItem"
import styles from "./style.module.css"
import { ICartItem } from "@/types"

const CartItems = () => {
    let cartItems: ICartItem[] = [];
    if (typeof window !== 'undefined') {
        cartItems = JSON.parse(localStorage.getItem('cartItems') as string) || [];
    }

    return (
        <div className={styles.CartItems}>
            {cartItems !== null && <>
                <div className={styles.Top}>
                    <div>Товары</div>
                    <div>
                        <div>Количество</div>
                        <div>Цена</div>
                        <div>Сумма</div>
                    </div>
                </div>

                <div className={styles.List}>
                    {cartItems.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))}
                </div>
            </>}
        </div>
    )
}

export default CartItems