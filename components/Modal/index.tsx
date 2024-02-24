import useGlobalStore from '@/store'
import React from 'react'

const Modal = () => {
    const modal = useGlobalStore(state => state.modal)
    const modalMode = useGlobalStore(state => state.modalMode)

    // function fillContent() {
    //     switch (key) {
    //         case "":
    //     }
    // }

    return (
        <div>Modal</div>
    )
}

export default Modal