import Bread from "@/components/Bread"
import Layout from "@/components/Layout"
import styles from "./style.module.css"

const About = () => {
  const bread = [
    { link: "/", name: "Главная" },
    { link: "/about", name: "О компании" },
  ]

  return (
    <Layout>
      <section className={styles.Section}>
        <Bread array={bread} />
        <h2>О компании</h2>
        <h4>Миссия компании:</h4>

        <p>Стать проводником в мире обеспечения производства, профессионально предоставляя комплекс товаров и услуг. Что дает нам возможность процветать и обеспечивать уверенность в завтрашнем дне всем клиентам компании. Наши товары и услуги — это конечный результат совместных усилий, направленных на то, чтобы оправдать и превзойти ожидания наших клиентов и партнеров. <br /><br />

          В арсенале «Хим-НН» — качественные материалы, отлаженные связи с поставщиками, компетентные менеджеры.</p>

        <h4>Компания “Хим-НН” предлагает: </h4>

        <p>Резинотехнические изделия: <br />
          Рукава напорно-всасывающие, рукава напорные, рукава высокого давления (с фитингами, метражом), техпластины (ТМКЩ, МБС, АМС, вакуумные, пищевые, пористые, губчатые), ремни (клиновые, приводные, зубчатые, плоские с п/а сердечником, бесшовные, для сельхозтехники), ленты конвейерные, ремни норийные, резиновые шнуры, трубки, профили, автомобильные дорожки, ковры диэлектрические, клея резиновые, манжеты, кольца, резиновые смеси и т. д.</p>

        <p>Асботехнические изделия: <br />
          Асбокартон КАОН-1, асботкань, асбокрошка, асбестовые шнуры, ленты ЛАЭ и ЛАЛЭ, ленты тормозные, листы асбостальные, паронит, набивки сальниковые асбестовые, набивки безасбестовые, уплотнение фланцевых соединений и т. д.</p>

        <p>Электроизоляционные материалы:<br />
          Текстолит, гетинакс, стеклотекстолит, фторопласт (лист, стержень, трубки, втулки, кольца, пленки), стеклопластик рулонный, изолента (Х/Б, ПВХ), картон электроизоляционный, пленкоэлектрокартон, пленкосинкокартон, трубки (ТВ-40, ТВ-50, ТВ-60, ТКР, ТЛВ, ТЛМ, ТУТ, РАДПЛАСТ, СТ-18), ленты (ЛЕТСАР, ЛЭСБ/ЛЭС, киперная, смоляная, тафтяная, лавсановая, ЛСКЛ-155), лакоткань, стеклоткань, пленка (ПЭТ-Э, ПМА/ПМБ), шнур-чулок, миканит, лаки, эпоксидная смола, эбонит, изофлекс и т. д.</p>

        <p>Полимерные материалы:<br />
          Капролон (полиамид 6), полиамидные трубки, полиуретан, полипропилен, поликарбонат, оргстекло.</p>
      </section>
    </Layout>
  )
}

export default About