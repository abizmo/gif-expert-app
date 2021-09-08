import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid'
import useFetchGifs from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('GifGrid Tests', () => {
  const category = 'music'
  test('should render the component without items', () => {
    useFetchGifs.mockReturnValue([ [], true])
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })
  
  test('should render the component with items', () => {
    const gifs = [
      {
        id: '123',
        username: 'willy',
        title: 'puppy',
        img: 'http://localhost/puppy.jpg',
      }
    ]
    useFetchGifs.mockReturnValue([ gifs, false])
    const wrapper = shallow(<GifGrid category={category} />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').exists()).toBeFalsy()
    expect(wrapper.find('GifGridItem')).toHaveLength(gifs.length)
  })
  
})
