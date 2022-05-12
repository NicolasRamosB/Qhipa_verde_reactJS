import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(false)

    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId).then(item => {
            setProducts(item)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(true)
        })

        return (() => {
            setProducts()
        })

    }, [productId])

    return (

        <div>
            {
                loading ?
                    (products ?
                        <ItemDetail  {...products}/> :
                        <h1>El producto no existe</h1>)
                    :
                    <h1>cargando</h1>
            }
        </div>

    )
}
export default ItemDetailContainer