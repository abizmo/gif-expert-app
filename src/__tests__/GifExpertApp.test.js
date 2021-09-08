import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('GifExpertApp Tests', () => {
  test('should render and match with the snapshot', () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot()
  })
  
  test('should show a list of categories', () => {
    const categories = ['fail', 'paint']
    const wrapper = shallow(<GifExpertApp defaultState={categories} />)

    expect(wrapper).toMatchSnapshot()
    expect( wrapper.find('GifGrid')).toHaveLength(categories.length)
  })
  
})
