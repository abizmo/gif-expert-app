import { useEffect, useState } from "react";

import getGifs from '../helpers/getGifs'
const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getGifs( category )
      .then(setGifs)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [ category ])

  return [gifs, loading];
}

export default useFetchGifs;
