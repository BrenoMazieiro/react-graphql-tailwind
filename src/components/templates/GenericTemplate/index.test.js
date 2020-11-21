import React from 'react'
import { shallow } from 'enzyme'
import { GenericTemplate } from '.'

// eslint-disable-next-line react/jsx-props-no-spreading
const wrap = ({ ...props }) => shallow(<GenericTemplate {...props} />)

describe('GenericTemplate', () => {
  it('should render childrens', () => {
    const wrapper = wrap({
      children: <div id="test" />,
    })
    expect(wrapper.find({
      id: 'test',
    })).toHaveLength(1)
  })

  it('should render GenericTemplate', () => {
    const wrapper = wrap({
      children: <div id="test" />,
    })
    expect(wrapper.find({
      id: 'GenericTemplate',
    })).toHaveLength(1)
  })
})
