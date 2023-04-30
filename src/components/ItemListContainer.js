import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where} from 'firebase/firestore' 
import {db} from '../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [productsState, setProductsState] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        const productsRef = categoryId 
        ? query(collection(db, 'products'), where ('category', '==', categoryId) )
        : collection(db, 'products')

        getDocs(productsRef)
            .then(snapshot => {
                const productsAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })

                setProductsState(productsAdapted)
            })

            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>Please reload page</h1>
    }

    if(productsState && productsState.length === 0) {
        return <h1>No hay productos</h1>
    }

    return (
        <div className="ItemListContainer">
        <div className='card-body' style={{width: 100}}>
            <h1>{greeting}</h1>
            <ItemList products={productsState}/>
        </div>
        </div>
    )
}

export default ItemListContainer
