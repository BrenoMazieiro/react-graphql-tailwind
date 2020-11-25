import React from 'react'
import { shallow } from 'enzyme'
import { HomeContent } from '.'

// eslint-disable-next-line react/jsx-props-no-spreading
const wrap = ({ ...props }) => shallow(<HomeContent {...props} />)

describe('HomeContent', () => {
  it('should not render childrens', () => {
    const wrapper = wrap({
      children: <div id="test" />,
    })
    expect(wrapper.find({
      id: 'test',
    })).toHaveLength(0)
  })

  it('should render HomeContent', () => {
    const wrapper = wrap({})
    expect(wrapper.find({
      id: 'HomeContent',
    })).toHaveLength(1)
  })
})
