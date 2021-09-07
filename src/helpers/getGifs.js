const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const getGifs = async( category ) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&api_key=${GIPHY_API_KEY}`
  const resp = await fetch(url)
  const { data } = await resp.json()
  const gifs = data.map(gif => ({
    id: gif.id,
    username: gif.username,
    title: gif.title,
    img: gif.images.downsized_large.url,
  }))

  return gifs;
}

export default getGifs;
