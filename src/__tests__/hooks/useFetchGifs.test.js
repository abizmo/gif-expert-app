import { renderHook } from '@testing-library/react-hooks'
import useFetchGifs from '../../hooks/useFetchGifs'

describe('useFetchGifs tests', () => {
  test('should return initial state', async () => {
    const category = 'fail'
    
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category) )
    const [ gifs, loading ] = result.current;

    await waitForNextUpdate()
    expect( gifs ).toHaveLength(0)
    expect( loading ).toBeTruthy()
  })

  test('should return a gifs array and loading false', async () => {
    const category = 'fail'
    
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category) )
    await waitForNextUpdate()
    const [ gifs, loading ] = result.current;

    expect( gifs ).toHaveLength(10)
    expect( loading ).toBeFalsy()
  })
  
  
})
