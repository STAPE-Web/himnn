"use client"

import { ChangeEvent, FC } from "react"
import styles from "./style.module.css"

interface Props {
    label: string
    type: "text" | "email" | "tel" | "password"
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = ({ label, onChange, type, value }) => {
    return (
        <div className={styles.Input}>
            <label>{label}</label>
            <input type={type} onChange={onChange} value={value} />
        </div>
    )
}

export default Input