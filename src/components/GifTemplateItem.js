import React from 'react'

export const GifTemplateItem = ({ title, url }) => {
  return (
    <div className="gifs-card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
