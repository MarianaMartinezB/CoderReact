import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import ItemDetail from "../components/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../services/firebase/firebaseConfig"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState()
    const { itemId } = useParams()

    useEffect( () => {
        const productRef = doc(db, 'products', itemId)
        
        getDoc(productRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProduct(productAdapted)
            }) .catch(error => {
                console.log(error)
            })
    }, [itemId])

    if(loading) {
        return <h1>Loading..</h1>
    }

    return (
        <div>
            <h1 className="product-detail-style">Product Detail</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer