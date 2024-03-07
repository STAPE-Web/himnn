"use client"

import Bread from "@/components/Bread"
import Layout from "@/components/Layout"
import styles from "./style.module.css"
import CheckoutItems from "@/components/CheckoutItems"
import CheckoutBox from "@/components/CheckoutBox"
import CustomerInfo from "@/components/CustomerInfo"
import { useState } from "react"
import Checkbox from "@/ui/Checkbox"
import ButtonDefault from "@/ui/Buttons/Default"

const Checkout = () => {
  const bread = [
    { link: "/", name: "Главная" },
    { link: "/checkout", name: "Оформление заказа" },
  ]
  const [activeOrder, setActiveorder] = useState(false)
  const [state, setState] = useState(false)

  return (
    <Layout>
      <section className={styles.Section}>
        <Bread array={bread} />
        <h2>Оформление заказа</h2>

        <div className={styles.Box}>
          <div className={styles.MiniBox}>
            <CheckoutItems />
            <CustomerInfo setActiveorder={setActiveorder} />

            <div className={styles.ActiveOrder}>
              {activeOrder &&
                <>
                  <div onClick={() => setState(!state)} className={styles.Checkbox}>
                    <Checkbox state={state} />
                    <p>Нажимая кнопку «Оформить заказ», я даю своё согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года № 152-ФЗ «О персональных данных», на условиях и для целей, определённых в Согласии на обработку персональных данных</p>
                  </div>
                  <ButtonDefault onClick={() => state ? alert("Заявка отправлена") : alert("Подтвердите обработку персональных данных")}>Оформить заказ</ButtonDefault>
                </>
              }
            </div>
          </div>

          <CheckoutBox />
        </div>
      </section>
    </Layout>
  )
}

export default Checkout