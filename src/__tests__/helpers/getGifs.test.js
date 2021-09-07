import getGifs from "../../helpers/getGifs"

describe('GetGifs Tests', () => {
  test('should return 10 items', async () => {
    const gifs = await getGifs('kids')
    expect(gifs).toHaveLength(10)
  })

  test('should return 0 items if no category', async () => {
    const gifs = await getGifs('')
    expect(gifs).toHaveLength(0)
  })
})
