import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAsync } from '../../redux/actions/productActions';

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
    // dispatch(getProductsAsync());  
    getProducts();
    
    }, [])

    const getProducts = () => {
        dispatch(getProductsAsync());  

    }
    

    return (
        <div>
            <h1>Productos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>asd</td>
                        <td>asd</td>
                        <td>asd</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Home