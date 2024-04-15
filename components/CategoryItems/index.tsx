"use client";

import Image from "next/image";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { ICategory } from "@/types";
import { CategoriesAPI } from "@/api";
import Link from "next/link";

interface Props {
  category: string;
  subcategory: string;
}

const CategoryItems: FC<Props> = ({ category, subcategory }) => {
  const router = useRouter();
  const [data, setData] = useState<ICategory[]>([]);

  async function getAllCatalogs() {
    const result = await CategoriesAPI.getAll();
    setData(result);
  }

  useEffect(() => {
    getAllCatalogs();
  }, []);

  return (
    <div
      className={`${styles.List} ${subcategory !== "" ? styles.Hidden : ""} ${data.filter(
        (i) =>
          i.data.category.toLowerCase() ===
          category.toLowerCase().replace(/-/g, " ")
      ).length === 0
        ? styles.Hidden
        : ""
        }`}
    >
      {data
        .filter(
          (i) =>
            i.data.category.toLowerCase() ===
            category.toLowerCase().replace(/-/g, " ")
        )
        .map((item, index) => (
          <Link href={`/category?c=${category}&sub=${item.data.title
            .toLowerCase()
            .replace(/ /g, "-")}`}>
            <div
              key={index}
              className={styles.Item}
            >
              <Image src={item.data.image} width={220} height={220} alt="" />

              <div>
                <h3>{item.data.title}</h3>
                <p>{item.data.text}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default CategoryItems;
