import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ addCategory }) => {
  const [category, setCategory] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (category.trim().length > 2) {
      addCategory(categories => [ category, ...categories ])
      setCategory('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        onChange={({ target }) => setCategory(target.value)}
        value={category}
      />
    </form>
  )
}

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
}

export default AddCategory
