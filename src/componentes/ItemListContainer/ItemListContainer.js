import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../asyncmock'


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    return (
        <>
        
        <ItemList products = {products}/>
        </>
    )
}
export default ItemListContainer;