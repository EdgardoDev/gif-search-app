import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifTemplateItem } from './GifTemplateItem';

export const GifTemplate = ({ appCategory }) => {

  const { data:images, loading } = useFetchGifs(appCategory);

  return (
    <>
      <h3 className="category">{appCategory}</h3>

      { loading && <p>Loading...</p> }
      
      <div className="gifs-container">
        {
          images.map(img => (
            <GifTemplateItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  )
}
