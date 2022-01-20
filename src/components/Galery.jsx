import React, { useState } from 'react'
import '../styles/Galery.scss'

export default function Galery({ images }) {
  const [selected, setSelected] = useState(images[0]);
  console.log(images);

  return (
    <div className='Galery'>
      <div className="Galery__container">
        <img className='Galery__selected' src={selected} alt='Selected'/> 
        <div className="Galery__images">
          {images.map((image, index) => (
            <img 
              className={selected === image ? 'Galery__images--selected' : null }
              src={image} 
              key={index} 
              alt={`image ${index}`}
              onClick={() => setSelected(image)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}