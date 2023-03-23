import { Link } from "react-router-dom"
const Item=({name, price, id}) =>{
    return (
        <div>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <Link to={`/item/${id}`} >ver detalle</Link>
        </div> 
    )

}
export default Item