import Bread from "@/components/Bread"
import Filter from "@/components/Filter"
import Layout from "@/components/Layout"
import styles from "./style.module.css"
import CatalogItems from "@/components/CatalogItems"

const Category = () => {
  const bread = [
    { link: "/", name: "Главная" },
    { link: "/catalog", name: "Каталог" },
    { link: "/catalog/asbestotekhnicheskiye-izdeliya", name: "Астбестотехнические изделия" },
    { link: "/catalog/asbestotekhnicheskiye-izdeliya/asbokarton", name: "Асбокартон" },
  ]

  return (
    <Layout>
      <section className={styles.Section}>
        <Bread array={bread} />

        <h2>Асбокартон</h2>

        <div className={styles.Row}>
          <Filter />
          <CatalogItems />
        </div>
      </section>
    </Layout>
  )
}

export default Category