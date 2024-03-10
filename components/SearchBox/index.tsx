"use client"

import { ArrowDownIcon, CloseIcon, SearchIcon } from "@/ui/Icons"
import styles from "./style.module.css"
import useGlobalStore from "@/store"
import { useCallback, useEffect, useState } from "react"
import { IItems } from "@/types"
import { ItemsAPI } from "@/api"
import { useRouter } from "next/navigation"

const SearchBox = () => {
    const search = useGlobalStore(state => state.search)
    const changeSearch = useGlobalStore(state => state.changeSearch)
    const router = useRouter()

    const [data, setData] = useState<IItems[]>([])
    const [value, setValue] = useState("")

    const getData = useCallback(async () => {
        const result = await ItemsAPI.getAll()
        setData(result)
    }, [])

    useEffect(() => {
        getData()
    }, [getData])

    function handleData() {
        router.push(`/search?q=${value}`)
        changeSearch(false)
    }

    return (
        <div className={`${styles.SearchBox} ${search ? styles.Active : ""}`}>
            <div className={styles.Box}>
                <div className={styles.Input}>
                    <input type="text" placeholder="Поиск" value={value} onChange={e => setValue(e.target.value)} />
                    {value.length === 0 ? <SearchIcon /> : <ArrowDownIcon className={styles.ArrowIcon} onClick={() => handleData()} />}
                </div>

                <CloseIcon className={styles.Close} onClick={() => changeSearch(false)} />
            </div>
        </div>
    )
}

export default SearchBox