import React, { FC, useState } from "react"
import styles from "./style.module.css"
import { ArrowDownIcon, CheckIcon } from "../Icons"

interface Props {
    array: any
    value: string
    setValue: (value: string) => void
}

const Select: FC<Props> = ({ array, setValue, value }) => {
    const [active, setActive] = useState(false)

    function selectItem(item: string) {
        setValue(item)
        setActive(false)
    }

    return (
        <div className={`${styles.Module} ${active ? styles.Active : ''}`}>
            <div className={styles.Select} onClick={() => setActive(!active)}>
                <p>{value || 'Nothing selected'}</p>
                <ArrowDownIcon className={styles.Icon} />
            </div>

            {active && <div className={styles.DropDown}>
                {array.map((item: any, index: number) => (
                    <React.Fragment key={index}>
                        <div
                            className={styles.Item}
                            onClick={() => selectItem(item.data.title)}
                        >
                            {item.data.title}

                            <div className={`${styles.Checked} ${item.data.title === value ? styles.ActiveIcon : ''}`}>
                                <CheckIcon className={styles.CheckIcon} />
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>}
        </div>
    )
}

export default Select