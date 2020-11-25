import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '.'

// eslint-disable-next-line react/jsx-props-no-spreading
const wrap = ({ ...props }) => shallow(<Header {...props} />)

describe('Header', () => {
  it('should not render childrens', () => {
    const wrapper = wrap({
      children: <div id="test" />,
    })
    expect(wrapper.find({
      id: 'test',
    })).toHaveLength(0)
  })

  it('should render Header', () => {
    const wrapper = wrap({})
    expect(wrapper.find({
      id: 'Headers',
    })).toHaveLength(1)
  })
})
