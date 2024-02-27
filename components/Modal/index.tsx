import useGlobalStore from '@/store'
import styles from './style.module.css'
import Filter from './Filter'
import Catalog from './Catalog'
import Categories from './Categories'

const Modal = () => {
    const modal = useGlobalStore(state => state.modal)
    const modalMode = useGlobalStore(state => state.modalMode)
    const changeModal = useGlobalStore(state => state.changeModal)

    function fillContent() {
        switch (modalMode) {
            case "Catagories": return <Categories />
            case "Catalog": return <Catalog />
            case "Filter": return <Filter />
            case "Items": return ""
        }
    }

    return (
        <>
            {modal && <div className={styles.Modal} onClick={() => changeModal(false)}>
                {fillContent()}
            </div>}
        </>
    )
}

export default Modal