import Partner1 from "@/assets/Partner1"
import Partner2 from "@/assets/Partner2"
import Partner3 from "@/assets/Partner3"
import Partner4 from "@/assets/Partner4"
import Partner5 from "@/assets/Partner5"
import Partner6 from "@/assets/Partner6"
import Partner7 from "@/assets/Partner7"
import Partner8 from "@/assets/Partner8"
import styles from "./style.module.css"

const Partners = () => {
    const partners = [
        <Partner1 key="1" />,
        <Partner2 key="2" />,
        <Partner3 key="3" />,
        <Partner4 key="4" />,
        <Partner5 key="5" />,
        <Partner6 key="6" />,
        <Partner7 key="7" />,
        <Partner8 key="8" />
    ]

    return (
        <div className={styles.Partners}>
            <h2>Нам доверяют</h2>

            <div className={styles.List}>
                {partners.map((partner, index) => (
                    <div key={index}>
                        {partner}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Partners