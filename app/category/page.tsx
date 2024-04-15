"use client";

import Bread from "@/components/Bread";
import Filter from "@/components/Filter";
import Layout from "@/components/Layout";
import styles from "./style.module.css";
import CategoryItems from "@/components/CategoryItems";
import CatalogItems from "@/components/CatalogItems";
import { Suspense, useEffect, useState } from "react";

const Category = () => {
  const [filterData, setFilterData] = useState<string[]>([]);
  const [items, setItems] = useState<string[]>(["В наличии (100)"]);
  const [min, setMin] = useState("10");
  const [max, setMax] = useState("1000");

  const [category, setCategory] = useState("");
  const [subcategory, setsubcategory] = useState("");
  const [categoryTitle, setcategoryTitle] = useState("");
  const [subcategoryTitle, setsubcategoryTitle] = useState("");
  const [subText, setSubText] = useState("");
  const [inStockCount, setInStockCount] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      setCategory(searchParams.get("c") || "");
      setsubcategory(searchParams.get("sub") || "");
      setcategoryTitle(category ? category.replace(/-/g, " ") : "");
      setsubcategoryTitle(subcategory ? subcategory.replace(/-/g, " ") : "");
    }
  }, [category, subcategory, categoryTitle, subcategoryTitle]);

  const bread =
    subcategory === ""
      ? [
        { link: "/", name: "Главная" },
        { link: "/catalog", name: "Каталог" },
        { link: `/category?c=${category}`, name: categoryTitle },
      ]
      : [
        { link: "/", name: "Главная" },
        { link: "/catalog", name: "Каталог" },
        { link: `/category?c=${category}`, name: categoryTitle },
        {
          link: `/category?c=${category}&sub=${subcategory}`,
          name: subcategoryTitle,
        },
      ];

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <section className={styles.Section}>
          <Bread array={bread} />

          <h2>{subcategoryTitle === "" ? categoryTitle : subcategoryTitle}</h2>
          {subText !== "" && <pre>{subText}</pre>}

          <div className={styles.Row}>
            <Filter
              filterData={filterData}
              setFilterData={setFilterData}
              max={max}
              min={min}
              setMax={setMax}
              setMin={setMin}
              items={items}
              setItems={setItems}
              inStockCount={inStockCount}
            />

            <div className={styles.Items}>
              {filterData.length === 0 && (
                <CategoryItems
                  category={category as string}
                  subcategory={subcategory as string}
                  setSubText={setSubText}
                  subcategoryTitle={subcategoryTitle}
                />
              )}
              <CatalogItems
                category={category as string}
                subcategory={subcategory as string}
                filterData={filterData}
                items={items}
                min={min}
                max={max}
                setInStockCount={setInStockCount}
              />
            </div>
          </div>
        </section>
      </Suspense>
    </Layout>
  );
};

export default Category;
