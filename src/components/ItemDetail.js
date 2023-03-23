import Imagenes from './Imagenes'


const ItemDetail = ({ name, price, stock, id}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={Imagenes.libro1} alt={name} />
            <h3>precio: {price}</h3>
            <p>stock: {stock}</p>
        </div>
    )
}
export default ItemDetail