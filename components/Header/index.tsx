"use client"

import Logo from '@/assets/Logo'
import styles from './style.module.css'
import { BookmarkIcon, CartIcon, MapIcon, MenuIcon, PhoneIcon, SearchIcon } from '@/ui/Icons'
import { navigation } from './constants'
import ButtonDefault from '@/ui/Buttons/Default'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import useGlobalStore from '@/store'

const Header = () => {
    const router = useRouter()
    const changeSearch = useGlobalStore(state => state.changeSearch)
    const changeCall = useGlobalStore(state => state.changeCall)

    return (
        <header className={styles.Header}>
            <div className={styles.Box}>
                <div className={styles.Logo}>
                    <Link href="/"><Logo /></Link>
                    <p>Надежный поставщик товаров технического назначения</p>
                </div>

                <div className={styles.Location}>
                    <MapIcon />
                    <p>г. Нижний Новгород, ул. Кузбасская, д.1Ж, офис 405</p>
                </div>

                <div className={styles.Phone}>
                    <PhoneIcon />
                    <div>
                        <p><Link href="tel:+78312833097">+7 (831) 283-30-97</Link></p>
                        <p><Link href="tel:+78312833098">+7 (831) 283-30-98</Link></p>
                    </div>
                </div>

                <div className={styles.Icons}>
                    <SearchIcon onClick={() => changeSearch(true)} />
                    <BookmarkIcon />
                    <CartIcon onClick={() => router.push("/cart")} />
                    <MenuIcon />
                </div>
            </div>

            <nav className={styles.Navigation}>
                {navigation.map((nav, index) => (
                    <button
                        key={index}
                        className={styles.Button}
                        onClick={() => router.push(nav.link)}
                    >{nav.name}</button>
                ))}

                <ButtonDefault onClick={() => changeCall(true)}>Заказать звонок</ButtonDefault>
            </nav>
        </header>
    )
}

export default Header