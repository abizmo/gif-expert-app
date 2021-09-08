import React, {useState} from 'react'
import PropTypes from 'prop-types'

import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({ defaultState }) => {
  const [categories, setCategories] = useState(defaultState)

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory addCategory={setCategories} />
      <hr />
      <ol>
        { 
          categories.map(category => (
            <GifGrid key={category} category={category} />
          ))
        }
      </ol>
    </div>
  )
}

GifExpertApp.propTypes = {
  defaultState: PropTypes.arrayOf(PropTypes.string),
}

GifExpertApp.defaultProps = {
  defaultState: []
}

export default GifExpertApp
