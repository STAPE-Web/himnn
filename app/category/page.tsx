"use client"

import Bread from "@/components/Bread"
import Filter from "@/components/Filter"
import Layout from "@/components/Layout"
import styles from "./style.module.css"
import CategoryItems from "@/components/CategoryItems"
import CatalogItems from "@/components/CatalogItems"
import { useState } from "react"

const Category = () => {
  const [filterData, setFilterData] = useState<string[]>([])

  const bread = [
    { link: "/", name: "Главная" },
    { link: "/catalog", name: "Каталог" },
    { link: "", name: "" },
  ]

  return (
    <Layout>
      <section className={styles.Section}>
        <Bread array={bread} />

        <h2>Асбестотехнические изделия</h2>

        <div className={styles.Row}>
          <Filter filterData={filterData} setFilterData={setFilterData} />

          <div className={styles.Items}>
            {filterData.length === 0 && <CategoryItems />}
            <CatalogItems />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Category