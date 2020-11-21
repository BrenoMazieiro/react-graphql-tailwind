import React from 'react'
import { shallow } from 'enzyme'
import { HomePage } from '.'

// eslint-disable-next-line react/jsx-props-no-spreading
const wrap = ({ ...props }) => shallow(<HomePage {...props} />)

describe('HomePage', () => {
  it('should not render childrens', () => {
    const wrapper = wrap({
      idPage: 'homePage', children: 'teste',
    })
    expect(wrapper.find({
      children: 'test',
    })).toHaveLength(0)
  })

  it('should render homePage', () => {
    const wrapper = wrap({
      idPage: 'homePage',
    })
    expect(wrapper.find({
      idPage: 'homePage',
    })).toHaveLength(1)
  })
})
