import Bread from "@/components/Bread"
import Filter from "@/components/Filter"
import Layout from "@/components/Layout"
import styles from "./style.module.css"
import CategoryItems from "@/components/CategoryItems"
import CatalogItems from "@/components/CatalogItems"

const Category = () => {
  const bread = [
    { link: "/", name: "Главная" },
    { link: "/catalog", name: "Каталог" },
    { link: "/catalog/asbestotekhnicheskiye-izdeliya", name: "Астбестотехнические изделия" },
  ]

  return (
    <Layout>
      <section className={styles.Section}>
        <Bread array={bread} />

        <h2>Асбестотехнические изделия</h2>

        <div className={styles.Row}>
          <Filter />

          <div className={styles.Items}>
            <CategoryItems />
            <CatalogItems />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Category