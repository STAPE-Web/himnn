import useGlobalStore from "@/store"
import styles from "./style.module.css"
import { AddIcon, CheckIcon, DeleteIcon } from "@/ui/Icons"
import { useState } from "react"
import { FilterAPI } from "@/api"

const Filter = () => {
    const filterData = useGlobalStore(state => state.filterData)
    const changeFilterData = useGlobalStore(state => state.changeFilterData)
    const [create, setCreate] = useState("")
    const [active, setActive] = useState(false)

    async function addItem() {
        if (filterData !== null) {
            const newArray = [...filterData?.data.array, create]
            await FilterAPI.update(filterData.id, newArray)
            changeFilterData({ id: filterData.id, data: { ...filterData.data, array: newArray } })
            setCreate("")
        }
    }

    async function deleteItem(index: number) {
        if (filterData !== null) {
            const newArray = filterData?.data.array.filter((_, id) => id !== index)
            await FilterAPI.update(filterData.id, newArray)
            changeFilterData({ id: filterData.id, data: { ...filterData.data, array: newArray } })
        }
    }

    return (
        <div className={styles.Box} onClick={e => e.stopPropagation()}>
            <div className={styles.Row}>
                <h2>{filterData?.data.title}</h2>
                <AddIcon onClick={() => setActive(true)} />
            </div>

            {active && <div className={styles.Creation}>
                <input value={create} onChange={e => setCreate(e.target.value)} placeholder="Введите параметр" />
                <div>
                    <CheckIcon onClick={() => addItem()} />
                </div>
            </div>}

            <div className={styles.List}>
                {filterData?.data.array.map((item, index) => (
                    <div className={styles.Item} key={index}>
                        {item}
                        <DeleteIcon onClick={() => deleteItem(index)} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter