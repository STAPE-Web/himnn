"use client"

import Bread from "@/components/Bread"
import Filter from "@/components/Filter"
import Layout from "@/components/Layout"
import styles from "./style.module.css"
import CategoryItems from "@/components/CategoryItems"
import CatalogItems from "@/components/CatalogItems"
import { useState } from "react"
import { useSearchParams } from 'next/navigation'

const Category = () => {
  const [filterData, setFilterData] = useState<string[]>([])
  const [items, setItems] = useState<string[]>(["В наличии (100)"])
  const [min, setMin] = useState("10")
  const [max, setMax] = useState("1000")

  const searchParams = useSearchParams()
  const category = searchParams.get('c') || ""
  const subcategory = searchParams.get('sub') || ""
  const categoryTitle = category ? category.replace(/-/g, ' ') : ""
  const subcategoryTitle = subcategory ? subcategory.replace(/-/g, ' ') : ""

  const bread = subcategory === "" ? [
    { link: "/", name: "Главная" },
    { link: "/catalog", name: "Каталог" },
    { link: `/category?c=${category}`, name: categoryTitle },
  ] : [
    { link: "/", name: "Главная" },
    { link: "/catalog", name: "Каталог" },
    { link: `/category?c=${category}`, name: categoryTitle },
    { link: `/category?c=${subcategory}`, name: subcategoryTitle },
  ]

  return (
    <Layout>
      <section className={styles.Section}>
        <Bread array={bread} />

        <h2>{categoryTitle}</h2>

        <div className={styles.Row}>
          <Filter filterData={filterData} setFilterData={setFilterData} max={max} min={min} setMax={setMax} setMin={setMin} items={items} setItems={setItems} />

          <div className={styles.Items}>
            {filterData.length === 0 && <CategoryItems category={category} subcategory={subcategory} />}
            <CatalogItems category={category} subcategory={subcategory} filterData={filterData} items={items} min={min} max={max} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Category