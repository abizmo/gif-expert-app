import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({ img, title, username }) => {
  return (
    <div className="card animate__animated animate__fadeInBottomLeft">
      <img src={img} alt={title} />
      <div className="info">
        <h5>{title}</h5>
        <p>{username}</p>
      </div>
    </div>
  )
}

GifGridItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default GifGridItem
