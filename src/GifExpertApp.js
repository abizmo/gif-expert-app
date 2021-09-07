import React, {useState} from 'react'

import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
const initialState = ['fail']

const GifExpertApp = () => {
  const [categories, setCategories] = useState(initialState)

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

export default GifExpertApp
