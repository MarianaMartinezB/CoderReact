import { Link } from "react-router-dom"

const Item=({name, price, img, id}) =>{
    return (
        <div style={{background: '#DEB992', marginLeft: 500, marginBottom: 50, borderRadius: 10, width: 500}}>
            <h3>{name}</h3>
            <img src={img} alt={name} style={{ width: 100, borderRadius: 10, height: 130, margin:10}}/>
            <h4>Price: $ {price}</h4>
            <Link to={`/item/${id}`} style={{ background: 'gray', color: 'white'}}>See detail</Link>
        </div>
    )

}
export default Item