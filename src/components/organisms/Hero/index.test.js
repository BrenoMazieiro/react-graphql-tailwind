import React from 'react'
import { shallow } from 'enzyme'
import { Hero } from '.'

// eslint-disable-next-line react/jsx-props-no-spreading
const wrap = ({ ...props }) => shallow(<Hero {...props} />)

describe('Hero', () => {
  it('should not render childrens', () => {
    const wrapper = wrap({
      children: <div id="test" />,
    })
    expect(wrapper.find({
      id: 'test',
    })).toHaveLength(0)
  })

  it('should render Hero', () => {
    const wrapper = wrap({})
    expect(wrapper.find({
      id: 'Hero',
    })).toHaveLength(1)
  })
})
