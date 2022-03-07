import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api'

const ShowProducts = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`)
        getAllProducts()
    }

  return (
    <div>
        <div className="d-grip gap-2">
            <Link to="/create" className="btn btn-success btn-lg mt-2 mb-2 text-white">Create</Link>
        </div>

        <table className="table table-striped">
            <thead className="bg-primary text-white">
                <tr>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>  
                <th>Actions</th>  
                </tr>    
            </thead>
        <tbody>
        { products.map( (product)=>(
            <tr key={product.id}>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                    <Link to={`/edit/${product.id}`} className="btn btn-warning">Edit</Link>
                    <button onClick={ ()=>deleteProduct(product.id) } className="btn btn-danger">Delete</button>
                </td>
            </tr>
        ) ) }
        </tbody>
        </table>

            <h3>Open Another Examples</h3>

            <Link to="/sum" className="btn btn-warning btn-lg mt-2 mb-2 text-black">Sumar</Link>
            <br></br>
            <Link to="/crud" className="btn btn-danger btn-lg mt-2 mb-2 text-white">Otro CRUD</Link>
    </div>
  )
}

export default ShowProducts