import { ICheckout } from "@/types";
import axios from "axios";

class Checkout {
    async create(data: ICheckout) {
        return await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/checkout`, {
            data
        }).then((res) => res.data)
    }
}

export default new Checkout()