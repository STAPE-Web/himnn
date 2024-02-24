import useGlobalStore from "@/store"
import styles from "./style.module.css"
import { AddIcon, DeleteIcon } from "@/ui/Icons"

const Filter = () => {
    return (
        <div className={styles.Box} onClick={e => e.stopPropagation()}>
            <div className={styles.Row}>
                <h2>Размер</h2>
                <AddIcon />
            </div>

            <div className={styles.List}>
                <div className={styles.Item}>
                    15 x 15 мм
                    <DeleteIcon />
                </div>
                <div className={styles.Item}>
                    16 x 16 мм
                    <DeleteIcon />
                </div>
            </div>
        </div>
    )
}

export default Filter