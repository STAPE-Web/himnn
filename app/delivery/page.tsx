"use client"

import Bread from "@/components/Bread"
import Layout from "@/components/Layout"
import styles from "./style.module.css"

const Delivery = () => {
  const bread = [
    { link: "/", name: "Главная" },
    { link: "/delivery", name: "Доставка" },
  ]

  return (
    <Layout>
      <section className={styles.Section}>
        <Bread array={bread} />
        <h2>Доставка</h2>
        <p className={styles.Text}>Доставим в любой регион РФ: транспортной компанией (доставка до терминала бесплатно), а также собственным транспортом. Доставим в любой регион РФ: транспортной компанией (доставка до терминала бесплатно), а также собственным транспортом. Доставим в любой регион РФ: транспортной компанией (доставка до терминала бесплатно), а также собственным транспортом. Доставим в любой регион РФ: транспортной компанией (доставка до терминала бесплатно), а также собственным транспортом. Доставим в любой регион РФ: транспортной компанией (доставка до терминала бесплатно), а также собственным транспортом. Доставим в любой регион РФ: транспортной компанией (доставка до терминала бесплатно), а также собственным транспортом. Доставим в любой регион РФ: транспортной компанией (доставка до терминала бесплатно), а также собственным транспортом.</p>

        <h3>География поставок:</h3>
        <div className={styles.Map} style={{ position: "relative", overflow: "hidden" }}>
          <a href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}>Яндекс Карты</a>
          <a href="https://yandex.ru/maps/?ll=88.048767%2C59.277244&utm_medium=mapframe&utm_source=maps&z=3.13" style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}>Яндекс Карты</a>
          <iframe src="https://yandex.ru/map-widget/v1/?ll=88.048767%2C59.277244&z=3.13" width="560" height="400" style={{ position: "relative" }}>
          </iframe>

          {/* Нижний Новгород, Владимир, Москва, Саранск, Ульяновск, Белгород, Екатеринбург, Челябинск, Архангельск, Смоленск, Тольятти, Ижевск, Пермь, Ростов на Дону, */}
        </div>
      </section>
    </Layout>
  )
}

export default Delivery