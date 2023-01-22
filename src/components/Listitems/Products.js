import ListItem from "../ListItem"

const items = [
    {
        id: 0,
        title: "Diary-Milk-Silk",
        price: 450,
        discountedPrice: 340,
        thumbnail: "placeholder.png"
    },
    {
        id: 1,
        title: "KIT-KAT",
        price: 100,
        discountedPrice: 80,
        thumbnail: "placeholder.png"
    },
    {
        id: 2,
        title: "Oreo-feast",
        price: 200,
        discountedPrice: 60,
        thumbnail: "placeholder.png"
    },
    {
        id: 3,
        title: "Dark-Chocolate",
        price: 300,
        discountedPrice: 40,
        thumbnail: "placeholder.png"
    },
    {
        id: 4,
        title: "Cadbury",
        price: 150,
        discountedPrice: 140,
        thumbnail: "placeholder.png"
    }
]

const Products = () => {
    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem>
                <ListItem data={items[2]}></ListItem>
                <ListItem data={items[3]}></ListItem>
                <ListItem data={items[4]}></ListItem>
            </div>
        </div>
    )
}

export default Products