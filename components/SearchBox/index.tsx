"use client"

import { CloseIcon, SearchIcon } from "@/ui/Icons"
import styles from "./style.module.css"
import useGlobalStore from "@/store"

const SearchBox = () => {
    const search = useGlobalStore(state => state.search)
    const changeSearch = useGlobalStore(state => state.changeSearch)

    return (
        <div className={`${styles.SearchBox} ${search ? styles.Active : ""}`}>
            <div className={styles.Box}>
                <div className={styles.Input}>
                    <input type="text" placeholder="Поиск" />
                    <SearchIcon />
                </div>

                <CloseIcon className={styles.Close} onClick={() => changeSearch(false)} />
            </div>
        </div>
    )
}

export default SearchBox