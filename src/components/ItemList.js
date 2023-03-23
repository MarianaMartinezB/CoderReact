import Item from "../components/Item"

const ItemList = ({ products }) => {
    return (
        <div >
            {
                 products.map(product => {
                    return <Item key={product.id} {...product}/>
                })
            }
        </div>
    )
}

export default ItemList