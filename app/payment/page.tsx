import Bread from "@/components/Bread"
import Layout from "@/components/Layout"
import styles from "./style.module.css"

const Payment = () => {
  const bread = [
    { link: "/", name: "Главная" },
    { link: "/payment", name: "Оплата" },
  ]

  return (
    <Layout>
      <section className={styles.Section}>
        <Bread array={bread} />
        <h2>Оплата</h2>
        <h4>Способы оплаты:</h4>

        <ul>
          <li>Наличный расчет</li>
          <li>Безналичный расчет</li>
        </ul>

        <p>Банковские реквизиты для перечисления д/с: <br />
          ООО &quot;Хим-НН&quot;<br />
          ИНН 5257135802 / КПП 525701001<br />
          р/с 40702810290080000187 Филиал Приволжский  ПАО Банк &quot;ФК Открытие&quot; г. Нижний Новгород к/с 30101810300000000881 БИК 042282881<br />
          р/с 40702810829050009036 Филиал «Нижегородский» АО «АЛЬФА-БАНК» г. Нижний Новгород к/с 30101810200000000824 БИК 042202824</p>
      </section>
    </Layout>
  )
}

export default Payment