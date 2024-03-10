"use client"

import Bread from '@/components/Bread'
import Layout from '@/components/Layout'
import { Suspense, useEffect, useState } from 'react'
import styles from "./style.module.css"
import { IItems } from '@/types'
import { ItemsAPI } from '@/api'
import Item from '@/ui/Item'

const SearchPage = () => {
    const [query, setQuery] = useState("")

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

    async function getAllCatalogs() {
        const result = await ItemsAPI.getAll()
        setData(result)
    }

    useEffect(() => {
        getAllCatalogs()
    }, [])

    return (
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                <section className={styles.Section}>
                    <Bread array={bread} />

                    <h2>{data.filter(i => i.data.artikul === query ? true : i.data.title.toLowerCase().includes(query.toLowerCase())).length !== 0 ? query : `По Вашему запросу ${query} ничего не найдено`}</h2>

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