import React from 'react'
import PropTypes from 'prop-types';

export const GifTemplateItem = ({ title, url }) => {
  return (
    <div className="gifs-card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

// PopTypes implementation.
GifTemplateItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}


