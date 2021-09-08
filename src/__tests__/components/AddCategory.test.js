import { shallow } from "enzyme"
import '@testing-library/jest-dom'
import AddCategory from "../../components/AddCategory"

describe('AddCategory Tests', () => {
  const addCategory = jest.fn()
  let wrapper;

  beforeEach(() => {
    jest.resetAllMocks()
    wrapper = shallow(<AddCategory addCategory={addCategory} />);
  })

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should change the input', () => {
    const input = wrapper.find('input')
    const value = 'text'
    input.simulate('change', { target: { value }})
    const inputValue = wrapper.find('input').prop('value');
    
    expect(inputValue).toBe(value)
  })
  
  test('should not submit if inputValue <= 2', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() {} })
    expect(addCategory).not.toHaveBeenCalled()

    const input = wrapper.find('input');
    const value = 'te'
    input.simulate('change', { target: { value }})
    form.simulate('submit', { preventDefault() {} })
    expect(addCategory).not.toHaveBeenCalled()
  })
  
  test('should call addCategory and clean input when submit', () => {
    const value = 'Submitting'

    wrapper.find('input').simulate('change', { target: { value }})
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    expect(addCategory).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe('')
  })
  
  
})
