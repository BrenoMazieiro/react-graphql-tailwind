import React from 'react'
import { shallow } from 'enzyme'
import { Footer } from '.'

// eslint-disable-next-line react/jsx-props-no-spreading
const wrap = ({ ...props }) => shallow(<Footer {...props} />)

describe('Footer', () => {
  it('should not render childrens', () => {
    const wrapper = wrap({
      children: <div id="test" />,
    })
    expect(wrapper.find({
      id: 'test',
    })).toHaveLength(0)
  })

  it('should render Footer', () => {
    const wrapper = wrap({})
    expect(wrapper.find({
      id: 'Footer',
    })).toHaveLength(1)
  })
})
