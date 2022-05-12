import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../asyncmock'
import {Socialbar} from "../Socialbar/Socialbar"

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
        <div className="titleItemContainer">
        <h1 className="titleCategory">{categoryId}</h1>
        </div>
        <ItemList  products = {products}/>
        <Socialbar/>
        
        </>
    )
}
export default ItemListContainer;