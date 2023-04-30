import Item from  './Item'

const ItemList = ({ products }) => {
    return (
        
        <div className='card-body' style={{ display: 'flex', flexDirection: 'column', width:200 }} >
            {
                 products.map(product => {
                    return <Item key={product.id} {...product}/>
                })
            }
        </div>
    )
}

export default ItemList