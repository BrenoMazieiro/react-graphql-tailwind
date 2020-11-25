import React from 'react'
import { shallow } from 'enzyme'
import { PageTemplate } from '.'

// eslint-disable-next-line react/jsx-props-no-spreading
const wrap = ({ ...props }) => shallow(<PageTemplate {...props} />)

describe('PageTemplate', () => {
  it('should not render childrens', () => {
    const wrapper = wrap({
      children: <div id="test" />,
      idPage: 'PageTemplate',
      hero: <div />,
      header: <div />,
      content: <div />,
      footer: <div />,
    })
    expect(wrapper.find({
      id: 'test',
    })).toHaveLength(0)
  })

  it('should render PageTemplate', () => {
    const wrapper = wrap({
      idPage: 'PageTemplate',
      hero: <div />,
      header: <div />,
      content: <div />,
      footer: <div />,
    })
    expect(wrapper.find({
      id: 'PageTemplate',
    })).toHaveLength(1)
  })
})
