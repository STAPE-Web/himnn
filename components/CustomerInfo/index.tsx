"use client"

import ButtonSmall from "@/ui/Buttons/Small"
import { UserIcon } from "@/ui/Icons"
import styles from "./style.module.css"
import { useState } from "react"
import Checkbox2 from "@/ui/Checkbox2"
import Input from "@/ui/Input"
import Textarea from "@/ui/Textarea"

const CustomerInfo = () => {
    const [active, setActive] = useState(false)
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [comment, setComment] = useState("")

    return (
        <div className={`${styles.CustomerInfo} ${active ? styles.Active : ""}`}>
            <div className={styles.Top}>
                <div>
                    <UserIcon />
                    <h3>Информация о покупателе</h3>
                </div>

                <button onClick={() => setActive(true)}>Изменить</button>
            </div>

            <div className={styles.Info}>
                <div className={styles.Check}>
                    <label>Тип плательщика</label>

                    <div className={styles.Checkboxes}>
                        <div className={styles.Checkbox}>
                            <Checkbox2 state={true} />
                            Физическое лицо
                        </div>

                        <div className={styles.Checkbox}>
                            <Checkbox2 state={false} />
                            Юридическое лицо
                        </div>
                    </div>
                </div>

                <div className={styles.Form}>
                    <Input label="Ф.И.О." onChange={e => setFullname(e.target.value)} type="text" value={fullname} />
                    <Input label="E-mail" onChange={e => setEmail(e.target.value)} type="email" value={email} />
                    <Input label="Номер телефона" onChange={e => setPhone(e.target.value)} type="tel" value={phone} />
                    <Textarea label="Комментарий к заказу" onChange={e => setComment(e.target.value)} value={comment} />
                </div>
            </div>

            <div className={styles.ButtonBox}>
                <ButtonSmall onClick={() => setActive(false)}>Далее</ButtonSmall>
            </div>
        </div>
    )
}

export default CustomerInfo