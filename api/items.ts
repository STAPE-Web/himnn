import { IItems } from "@/types";
import axios from "axios";

class Items {
    async get(id: string) {
        return await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/categories`, {
            params: {
                id
            }
        }).then((res) => res.data)
    }

    async getAll() {
        return await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/items`).then((res) => res.data)
    }

    async create(data: IItems) {
        return await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/categories`, {
            data
        }).then((res) => res.data)
    }

    async delete(id: string) {
        return await axios.delete(`${process.env.NEXT_PUBLIC_SERVER}/categories`, {
            params: {
                id
            }
        }).then((res) => res.data)
    }

    async update(id: string, data: IItems) {
        return await axios.put(`${process.env.NEXT_PUBLIC_SERVER}/categories`, {
            id, data
        }).then((res) => res.data)
    }
}

export default new Items()