import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct, updateProduct } from '../../services/products.js'
import Delete from '../../components/Delete/Delete.js'
import '../EditProduct/EditProduct.css'
import Layout from '../../components/Layout/Layout.js'


export default function EditProduct() {

  const [product, setProduct] = useState({title:'', img:'', price:'', description:'', category:''})

  const params = useParams()
  useEffect(() => {
    const findProduct = async () => {
      const foundProduct = await getProduct(params.id)
      setProduct(foundProduct)
    }
    findProduct()
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateProduct(params.id, product)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  return (
    <Layout>
    <div>
      
      <form className="edit-products">
        <h1 className='edit-product-title'>Edit Product</h1>
        <h5>Fill in the form below to make changes to a product.</h5>
        <input
          className="title-input"
          placeholder="Update Product Name"
          value={product.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="price-input"
          placeholder="Update Price"
          value={product.price}
          name="price"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="description-input"
          placeholder="Update Description"
          value={product.description}
          name="description"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="img-input"
          placeholder="Update Image"
          value={product.img}
          name="img"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="category-input"
          placeholder="Update Item Category"
          value={product.category}
          name="category"
          onChange={(e) => handleChange(e)}
        />  
      
      
      
      <div className='multiple-btn'>
      <Delete />
      <button className='edit-product-btn' onClick={(e) => handleSubmit(e)}>Edit</button>
      </div>
      </form>
    
    </div>
    </Layout>
  )
}