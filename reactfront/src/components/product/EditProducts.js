import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function EditProducts() {
  const navigate = useNavigate();

  const { id } = useParams()


  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)

  const [validationError,setValidationError] = useState({})

  useEffect(()=>{
    fetchProduct()
  },[])

  const fetchProduct = async () => {
    await axios.get(`http://127.0.0.1:8000/api/product/${id}`).then(({data})=>{
      const { description, price, stock } = data
      setDescription(description)
      setPrice(price)
      setStock(stock)
    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }


  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('_method', 'PUT');

    formData.append('description', description)
    formData.append('price', price)
    formData.append('stock', stock)

    await axios.post(`http://localhost:8000/api/product/${id}`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/crud")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Update Product</h4>
              <hr />
              <div className="form-wrapper">
                {
                  Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {
                              Object.entries(validationError).map(([key, value])=>(
                                <li key={key}>{value}</li>   
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
                <Form onSubmit={updateProduct}>
                <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={description} onChange={(event)=>{
                              setDescription(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" value={price} onChange={(event)=>{
                              setPrice(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>

                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" value={stock} onChange={(event)=>{
                              setStock(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Update
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}