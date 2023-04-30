import { Link } from 'react-router-dom'
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from './ItemCount'
import { useNotification } from "../notification/NotificationService"


const ItemDetail = ({ id, name, price, img, stock, description}) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        setQuantity(quantity)
        addItem(productToAdd)
        setNotification('success' , `Added correctly ${quantity} ${name}`, 1)

    }

    return (
        <div className= 'container card' style={{width: 500, background: '#DEB992'}}>
        <div className='card-body' style={{background: '#DEB992', margin: 10}}>
            <h2>{name}</h2>
            <img src={img} alt={name} style={{ width: 100}}/>
            <h3>Price: $ {price}</h3>
            <h4>Description: {description}</h4>
            <p>Stock: {stock}</p>
            <footer>
                {stock ? <ItemCount onAdd={handleOnAdd} stock={stock}/> : <div><h4 style={{color: 'red'}}>Out of stock</h4></div>}
            </footer>
            </div>

        </div>
    )
}

export default ItemDetail