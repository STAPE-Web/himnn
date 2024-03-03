export type ICatalog = {
    id: string,
    data: {
        image: string
        text: string
        timestamp: any
        title: string
    }
}

export type IItems = {
    id: string,
    data: {
        artikul: string,
        price: number,
        image: string,
        additional: {
            standart: string,
            creator: string,
            thickness: number,
            width: number,
            weight: number,
            mark: string,
            height: number
        },
        inStock: boolean,
        text: string,
        title: string,
        seo: {
            description: string,
            title: string
        },
        timestamp: any
        category: string,
        subcategory: string
    }
}

export type ICategory = {
    id: string,
    data: {
        image: string,
        text: string,
        title: string,
        category: string,
        timestamp: any
    }
}

export type IFilter = {
    id: string,
    data: {
        array: string[],
        title: string,
        timestamp: any
    }
}

export type ICartItem = {
    image: string,
    title: string,
    price: number,
    count: number,
    id: string
}