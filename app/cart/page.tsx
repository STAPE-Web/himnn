"use client"

import Bread from "@/components/Bread"
import CartItems from "@/components/CartItems"
import Layout from "@/components/Layout"
import { CloseIcon } from "@/ui/Icons"
import styles from "./style.module.css"
import ButtonSmall from "@/ui/Buttons/Small"
import { useRouter } from "next/navigation"

const Cart = () => {
  const router = useRouter()

  const bread = [
    { link: "/", name: "Главная" },
    { link: "/cart", name: "Корзина" },
  ]

  return (
    <Layout>
      <section className={styles.Section}>
        <Bread array={bread} />
        <h2>Корзина</h2>

        <div className={styles.Box}>
          <div className={styles.Buttons}>
            <button>Заказ (2)</button>
            <button>Избранное (1)</button>
          </div>

          <button className={styles.ClearButton}>
            <CloseIcon />
            Очистить
          </button>
        </div>

        <CartItems />

        <div className={styles.Contolls}>
          <div>
            <button className={styles.ClearButton} onClick={() => router.push("/catalog")}>В каталог</button>
            <h3>Итого: 2299.58 руб.</h3>
          </div>

          <ButtonSmall onClick={() => router.push("/checkout")}>Оформить заказ</ButtonSmall>
        </div>
      </section>
    </Layout>
  )
}

export default Cart