import React, { useState } from 'react'

import useGetProducts from '../hooks/useGetProducts'
import ProductItem from '../components/ProductItem'
import InitialState from '../InitialState'
import '../styles/ProductList.scss'

const API = 'https://api.escuelajs.co/api/v1/products'

export default function ProductList() {
  // const products = useGetProducts(API)
  console.log(InitialState.products);

  const [ search, setSearch ] = useState('');
  const handleSearch = (event) => {
    setSearch(event.target.value);
  }
  const items = InitialState.products.filter((item => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  }))

  return (
    <>
      <div className="ProductList__input--container">
        <input
          className="ProductList__input"
          type="text"
          value={search}
          placeholder="Buscar por marca o modelo..."
          onChange={handleSearch}
        />
      </div>

      <section className='ProductList__container'>
        <div className="ProductList">
          {items.map(product => (
            <ProductItem product={product} key={product.id} />
            ))}
        </div>
      </section>
    </>
  )
}