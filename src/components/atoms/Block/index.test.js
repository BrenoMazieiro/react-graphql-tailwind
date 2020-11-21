import React from 'react'
import { shallow } from 'enzyme'
import { Block } from '.'

// eslint-disable-next-line react/jsx-props-no-spreading
const wrap = ({ ...props }) => shallow(<Block {...props} />)

describe('Block', () => {
  it('should render childrens', () => {
    const wrapper = wrap({
      children: <div id="test" />,
    })
    expect(wrapper.find({
      id: 'test',
    })).toHaveLength(1)
  })

  it('should render homePage', () => {
    const wrapper = wrap({
      children: <div id="test" />,
    })
    expect(wrapper.find({
      id: 'block',
    })).toHaveLength(1)
  })
})
