import Bread from "@/components/Bread"
import Layout from "@/components/Layout"
import styles from "./style.module.css"
import CheckoutItems from "@/components/CheckoutItems"
import CheckoutBox from "@/components/CheckoutBox"
import CustomerInfo from "@/components/CustomerInfo"

const Checkout = () => {
  const bread = [
    { link: "/", name: "Главная" },
    { link: "/checkout", name: "Оформление заказа" },
  ]

  return (
    <Layout>
      <section className={styles.Section}>
        <Bread array={bread} />
        <h2>Оформление заказа</h2>

        <div className={styles.Box}>
          <div className={styles.MiniBox}>
            <CheckoutItems />
            <CustomerInfo />
          </div>

          <CheckoutBox />
        </div>
      </section>
    </Layout>
  )
}

export default Checkout