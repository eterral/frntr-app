import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.js';
import Layout from '../../components/Layout/Layout.js';
import { getKitchen } from '../../services/products.js';

export default function Kitchen() {
  const [kitchen, setKitchen] = useState([])

  useEffect(() => {
    const grabKitchen = async () => {
      const res = await getKitchen()
      setKitchen(res)
    }
    grabKitchen();
  }, [])

  return (
    <Layout>
      <div>
        {kitchen.map((product) => (
          <ProductCard
            id={product?._id}
            title={product?.title}
            img={product?.img}
            description={product?.description}
            price={product?.price}
            category={product?.category}
          />
        ))}
      </div>
    </Layout>
  )
}