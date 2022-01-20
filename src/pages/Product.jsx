import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import initialState from '../InitialState';
import '../styles/Product.scss';
import Galery from '../components/Galery';

export default function View() {
  const params = useParams()
  console.log(params)
  
  const item = initialState.products;

  const myAuto = (auto) => {
    return auto.id == params.id;
  }
  const filtroItem = item.filter(myAuto);
  console.log(filtroItem)

    return (
        <>
            <div className="View__content" >
                <div className="View" >
                    <div className="View__container" >
                        <Galery images={filtroItem[0].images} />
                    </div>
                    <div className="View__container" >
                        <div>
                            <h2>{filtroItem[0].title}</h2>
                            <h1>$ {filtroItem[0].price}</h1>
                            <NavLink to="/" className="View__button consult" >
                                Consultar
                            </NavLink>
                        </div>
                    </div>
                    <div className="View__container" >
                        <h2>Descripción del producto</h2>
                        <p>{filtroItem[0].description}</p>
                    </div>
                </div>
            </div>
        </>
    );    
}