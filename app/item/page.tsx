"use client"

import Bread from "@/components/Bread"
import Counter from "@/components/Counter"
import Layout from "@/components/Layout"
import ButtonSmall from "@/ui/Buttons/Small"
import { BookmarkIcon, CheckIcon } from "@/ui/Icons"
import Image from "next/image"
import { useState } from "react"
import styles from "./style.module.css"
import More from "@/ui/More"
import Tabs from "@/components/Tabs"
import Additional from "@/components/Additional"

const Item = () => {
  const [count, setCount] = useState("1")

  const bread = [
    { link: "/", name: "Главная" },
    { link: "/catalog", name: "Каталог" },
    { link: "/catalog/asbestotekhnicheskiye-izdeliya", name: "Астбестотехнические изделия" },
    { link: "/catalog/asbestotekhnicheskiye-izdeliya/asbokarton", name: "Асбокартон" },
    { link: "/item/paronit-sheet-pc-4x1030x1560mm-gost-481-80", name: "Паронит листовой ПК, 4x1030x1560мм, ГОСТ 481-80" },
  ]

  return (
    <Layout>
      <section className={styles.Section}>
        <Bread array={bread} />
        <h1>Паронит листовой ПК, 4x1030x1560мм, ГОСТ 481-80</h1>

        <div className={styles.MainInfo}>
          <Image src="/Item.png" width={500} height={300} alt="" />

          <div className={styles.Box}>
            <p>Артикул: 12312312</p>

            <div className={styles.Title}>
              <h4>Паронит листовой ПК, 4x1030x1560мм, ГОСТ 481-80</h4>
              <More state={true} />
            </div>

            <div className={styles.Price}>
              <h3>1190.13 руб./кг</h3>

              <div>
                <CheckIcon />
                Есть в наличии
              </div>
            </div>

            <div className={styles.Controlls}>
              <Counter setValue={setCount} value={count} />
              <ButtonSmall onClick={() => ({})}>В корзину</ButtonSmall>
              <BookmarkIcon className={styles.Icon} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.Section}>
        <Tabs />
        <p>Кислота, щелочи, окислители, нитрозные и другие агрессивные среды</p>

        <Additional />
      </section>
    </Layout>
  )
}

export default Item