import { useState, useEffect} from 'react';
import { getProducts , getProductsByCategory} from '../asyncMock';
import ItemList from './ItemList/Itemlist';
import { useParams } from 'react-router-dom';

const Itemlistcontainer = ({greeting}) => {
    const [products, setProducts] = useState ([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then(response =>{
            setProducts(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products = {products}/>
        </div>
    )
}

export default Itemlistcontainer