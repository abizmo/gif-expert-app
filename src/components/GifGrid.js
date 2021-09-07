import React from 'react'
import PropTypes from 'prop-types'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {
  const [ gifs, loading ] = useFetchGifs(category);

  return (
    <div>
      <h3>{ category }</h3>

      { loading && <p className="animate__animated animate__pulse">Loading...</p>}

      <div className="card-grid">
        {
          gifs.map((gif) => (
            <GifGridItem
              key={gif.id}
              { ...gif }
            />
          ))
        }
      </div>
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifGrid
