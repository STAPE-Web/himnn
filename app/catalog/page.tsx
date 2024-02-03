import Bread from "@/components/Bread"
import Layout from "@/components/Layout"
import styles from "./styles.module.css"
import Categories from "@/components/Categories"

const Catalog = () => {
  const bread = [
    { link: "/", name: "Главная" },
    { link: "/catalog", name: "Каталог" },
  ]

  return (
    <Layout>
      <section className={styles.Section}>
        <Bread array={bread} />
        <Categories />
      </section>
    </Layout>
  )
}

export default Catalog