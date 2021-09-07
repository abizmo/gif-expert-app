import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem"

describe('GifGridItem Tests', () => {
  const img = 'https://media1.giphy.com/media/xUA7aLrdFvkS3BeaEE/giphy.gif?cid=e23a9f3bdbm7ugc2t3ryb9qt5b2kazo22d1hf6mq4oxudl8k&rid=giphy.gif&ct=g'
  const title = 'Little turds'
  const username = 'teamcoco'
  const wrapper = shallow(<GifGridItem img={img} title={title} username={username} />)
  test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should render the title inside a h5', () => {
    const h5Text = wrapper.find('h5').text()
    expect(h5Text).toBe(title);
  })

  test('should render the username inside a p', () => {
    const pText = wrapper.find('p').text()
    expect(pText).toBe(username);
  })

  test('should render the image with src=img and alt=title', () => {
    const { src, alt } = wrapper.find('img').props()
    expect(src).toBe(img);
    expect(alt).toBe(title);
  })

  test('should have animate__fadeInBottomLeft class', () => {
    const className = 'animate__fadeInBottomLeft'
    const classDiv = wrapper.find('div').at(0).prop('className');
    expect(classDiv).toContain(className)
  })
  
  
})
