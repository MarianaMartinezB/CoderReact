import { Link } from 'react-router-dom'
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from './ItemCount'


/* const ItemDetail = ({ id, name, price, img, stock, description}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={Imagenes.libro1} alt={name} />
            <h3>precio: {price}</h3>
            <p>stock: {stock}</p>
        </div>
    )
}
export default ItemDetail */

const ItemDetail = ({ id, name, price, img, stock, description}) => {
    const [quantity, setQuantity] = useState (0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const serviceToAdd = {
            id, name, price, quantity
        }
        addItem(serviceToAdd)

        setQuantity(quantity)

    }
        return (
            <div style={{background: 'pink', margin: 10}}>
                <h2>{name}</h2>
                <img src={img} alt={name} style={{ width: 500}}/>
                <h3>Price: {price}</h3>
                <p>Description: {description}</p>
                <p>Stock: {stock}</p>
                <footer>
                    {
                        quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                        ) : (
                            <Link to='/cart'>Check Out</Link>
                        )
                    }
                </footer>
                

            </div>
        )
    }

export default ItemDetail