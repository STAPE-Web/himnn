"use client"

import Bread from '@/components/Bread'
import Layout from '@/components/Layout'
import { Suspense, useEffect, useState } from 'react'
import styles from "./style.module.css"
import { ICatalog, ICategory, IItems } from '@/types'
import { CatalogAPI, CategoriesAPI, ItemsAPI } from '@/api'
import Item from '@/ui/Item'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SearchPage = () => {
    const [query, setQuery] = useState("")
    const router = useRouter()

    const bread = [
        { link: "/", name: "Главная" },
        { link: "", name: "Поиск" },
    ]

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const searchParams = new URLSearchParams(window.location.search);
            setQuery(searchParams.get('q') || "")
        }
    }, [query])

    const [data, setData] = useState<IItems[]>([])
    const [catalog, setCatalog] = useState<ICatalog[]>([])
    const [categories, setCategories] = useState<ICategory[]>([])

    async function getAllCatalogs() {
        const result = await ItemsAPI.getAll()
        const catalogResult = await CatalogAPI.getAll()
        const catResult = await CategoriesAPI.getAll()
        setData(result)
        setCategories(catResult)
        setCatalog(catalogResult)
    }

    useEffect(() => {
        getAllCatalogs()
    }, [])

    return (
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                <section className={styles.Section}>
                    <Bread array={bread} />

                    <h2>{data.filter(i => i.data.artikul === query ? true : i.data.title.toLowerCase().includes(query.toLowerCase())).length !== 0
                        || catalog.filter(i => i.data.title === query ? true : i.data.title.toLowerCase().includes(query.toLowerCase())).length !== 0 ? query : `По Вашему запросу "${query}" ничего не найдено`}</h2>

                    <div className={styles.CatalogList}>
                        {catalog
                            .filter(i => i.data.title === query ? true : i.data.title.toLowerCase().includes(query.toLowerCase()))
                            .map((item, index) => (
                                <div key={index} className={styles.Item} onClick={() => router.push(`/category?c=${item.data.title.toLowerCase().replace(/ /g, '-')}`)}>
                                    <Image src={item.data.image} width={280} height={250} alt="" />

                                    <div>
                                        <h3>{item.data.title}</h3>
                                        <p>{categories.map((cat) => cat.data.category === item.data.title ? ` ${cat.data.title} ·` : "").join('').slice(0, -1)}</p>
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className={styles.CategoryList}>
                        {categories.map((item, index) => (
                            <div key={index} className={styles.Item} onClick={() => router.push(`/category?sub=${item.data.title.toLowerCase().replace(/ /g, '-')}`)}>
                                <Image src={item.data.image} width={220} height={220} alt="" />

                                <div>
                                    <h3>{item.data.title}</h3>
                                    <p>{item.data.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.Items}>
                        <div className={styles.List}>
                            {data
                                .filter(i => i.data.artikul === query ? true : i.data.title.toLowerCase().includes(query.toLowerCase()))
                                .map((item, index) => (
                                    <Item item={item} key={index} />
                                ))}
                        </div>
                    </div>
                </section>
            </Suspense>
        </Layout>
    )
}

export default SearchPage