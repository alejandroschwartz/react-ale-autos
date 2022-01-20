import React, { useState } from 'react'

import useGetProducts from '../hooks/useGetProducts'
import ProductItem from '../components/ProductItem'
import InitialState from '../InitialState'
import ford from '@icons/ford.png'
import chevrolet from '@icons/chevrolet.png'
import fiat from '@icons/fiat.png'
import toyota from '@icons/toyota.png'
import renault from '@icons/renault.png'
import '../styles/ProductList.scss'

const API = 'https://api.escuelajs.co/api/v1/products'

export default function ProductList() {
  // const products = useGetProducts(API)
  console.log(InitialState.products);

  const [ search, setSearch ] = useState('');
  const handleSearch = (event) => {
    setSearch(event.target.value);
  }
  const handleClick = (event) => {
    console.log(event);
    setSearch(event)
  }; 
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

      <div className="ProductList__button--container">
        <button 
          className="ProductList__button"
          onClick={() => handleClick('ford')}
        >
          <img src={ford} alt="" />
        </button>
        <button 
          className="ProductList__button"
          onClick={() => handleClick('chevrolet')}
        >
          <img src={chevrolet} alt="" />
        </button>
        <button 
          className="ProductList__button"
          onClick={() => handleClick('fiat')}
        >
          <img src={fiat} alt="" />
        </button>
        <button 
          className="ProductList__button"
          onClick={() => handleClick('toyota')}
        >
          <img src={toyota} alt="" />
        </button>
        <button 
          className="ProductList__button"
          onClick={() => handleClick('renault')}
        >
          <img src={renault} alt="" />
        </button>
      </div>

      <section className='ProductList__container'>
          {items.length > 0 ?
            <>
              <div className="ProductList">
                {items.map(product => (
                  <ProductItem product={product} key={product.id} />
                ))}
              </div>
            </>
            : <>
                <h1 className="Product__error" >
                  No hay publicaciones que coincidan con tu búsqueda.
                </h1> <br/>
                <i className="fas fa-search"></i>
            </>
          }
      </section>
    </>
  )
}